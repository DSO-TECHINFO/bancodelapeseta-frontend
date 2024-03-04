import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerificationService } from '../Verification/service/verification.service';
import { VerificationCodeService } from '@/CORE/Context/service/verification-code-storage.service';
import { WInputComponent } from '@/SHARED/Widgets/input-app';
import { UnsignedVerificationRequest } from './interface/UnsignedVerificationRequest';
import { CreateSign } from './interface/CreateSign.interface';

@Component({
  selector: 'app-create-sign',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, ReactiveFormsModule, WInputComponent],
  templateUrl: './create-sign.component.html',
})
export default class CreateSignComponent implements OnInit{

  @ViewChildren('inputRef', { read: ElementRef }) inputRefs!: QueryList<ElementRef>;

  unsignedCode: string = '';
  emailCode: string = '';
  phoneCode: string = '';

  constructor(
    private verificationService: VerificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private verificationCodeService: VerificationCodeService
  ){}

  signCodeForm = this.formBuilder.group({});

  inputConfigs = [
    { name: 'numb1', type: 'tel', visible: true },
    { name: 'numb2', type: 'tel', visible: true },
    { name: 'numb3', type: 'tel', visible: true },
    { name: 'numb4', type: 'tel', visible: true },
    { name: 'numb5', type: 'tel', visible: true },
    { name: 'numb6', type: 'tel', visible: true },
  ];

  ngOnInit(): void {

    this.phoneCode = this.verificationCodeService.getSmsCode()!;
    this.emailCode = this.verificationCodeService.getEmailCode()!;

    const unsignedRequest = {
      phoneCode: this.phoneCode,
      emailCode: this.emailCode
    }

    this.verificationService.verificationUnsignedCode(unsignedRequest as UnsignedVerificationRequest, 'api/v1/verify/transaction/unsigned').subscribe({
      next: (userData) => {
        this.verificationCodeService.setVerificationCode(userData['verificationCode']);
        this.verificationCodeService.setVerificationExpCode(userData['expirationDate']);
        console.log("Send userData sms verification code: ", userData);
        // this.router.navigateByUrl('/email-verification');
      },
      error: (err) => {
        // this.router.navigateByUrl('/dashboard');

        console.error('No se pudo enviar el código de verificación por correo. El error es: ', err);
        //this.errorMessage = err;
      },
      complete: () => {
        // this.router.navigateByUrl('/email-verification');
        // this.verificationCodeForm.reset();
      },
    })
    throw new Error('Method not implemented.');
  }

  onDigitInput(inputIndex: number, event: any) {

    const value = event.event.key;

    if (value.toString().length == 1) {
      const nextIndex = inputIndex + 1;
      if (nextIndex < this.inputRefs.length) {
        console.log("En obtener el input adecuado: ", nextIndex);
        const nextInputRef = this.inputRefs.get(nextIndex);
        console.log("nextInputRef: ", nextInputRef);
        if (nextInputRef) {
          const nextInput = nextInputRef.nativeElement.firstChild;
          console.log("nextInput: ", nextInput);
          if (nextInput) {
            nextInput.focus();
          }
        }
      }
    }

  }

  onSendSign(){

    const values: string[] = Object.values(this.signCodeForm.value);
    const numberCount: { [ key: number ] : number } = {};

    for (const value of values) {
      const number = parseInt(value, 10); // Convertir a número
      numberCount[number] = (numberCount[number] || 0) + 1;
      if (numberCount[number] > 2) {
        console.log(`El número ${number} aparece más de 2 veces en el formulario.`);
        return;
      }
    }

    const secuence = [1, 2, 3, 4, 5, 6].join('');
    const stringValues = values.join('');

    if (stringValues.includes(secuence) || stringValues.includes(secuence.split('').reverse().join(''))) {
      console.log('Se encontró una secuencia completa del 1 al 6 o viceversa en la lista.');
      return;
    }

    console.log("No debería llegar a este console.log()");

    if(this.unsignedCode.length == 0){
      return
    }

    const createSign = {
      sign: stringValues,
      verificationCode: this.verificationCodeService.getVerificationCode()
    }

    this.verificationService.createSign(createSign as CreateSign, 'api/v1/auth/create/modify/sign').subscribe({
      next: (userData) => {
        // this.verificationCodeService.setEmailCode(this.unsignedCode);
      },
      error: (err) => {
        console.error('Incorrect code: ', err);
      },
      complete: () => {
        // this.router.navigateByUrl('/email-verification');
        this.signCodeForm.reset();
      },
    })
  }

}
