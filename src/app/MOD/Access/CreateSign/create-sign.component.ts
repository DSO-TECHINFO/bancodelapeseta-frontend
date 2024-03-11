import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerificationService } from '../Verification/service/verification.service';
import { VerificationCodeService } from '@/CORE/Context/service/verification-code-storage.service';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { UnsignedVerificationRequest } from './interface/UnsignedVerificationRequest';
import { CreateSign } from './interface/CreateSign.interface';
import { ValidationService } from '@/GENERIC/UTILS/validation.service';

@Component({
  selector: 'app-create-sign',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, ReactiveFormsModule, WInputComponent],
  templateUrl: './create-sign.component.html',
})
export default class CreateSignComponent implements OnInit{

  @ViewChildren('inputFirstFormRef', { read: ElementRef }) inputFirstFormRef!: QueryList<ElementRef>;
  @ViewChildren('inputSecondFormRef', { read: ElementRef }) inputSecondFormRef!: QueryList<ElementRef>;

  unsignedCode: string = '';
  emailCode: string = '';
  phoneCode: string = '';
  showRewriteSign: boolean = false;
  stringSignCode: string = '';

  constructor(
    private verificationService: VerificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private verificationCodeService: VerificationCodeService,
    private validationService: ValidationService
  ){}

  signCodeForm = this.formBuilder.group({});
  signCodeFormVerify = this.formBuilder.group({});

  inputFirstConfigs = [
    { name: 'numb1', type: 'tel', visible: true },
    { name: 'numb2', type: 'tel', visible: true },
    { name: 'numb3', type: 'tel', visible: true },
    { name: 'numb4', type: 'tel', visible: true },
    { name: 'numb5', type: 'tel', visible: true },
    { name: 'numb6', type: 'tel', visible: true },
  ];

  inputSecondConfigs = [
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

  onDigitFirstFormInput(inputIndex: number, event: any, form: string) {

    const value = event.event.key;
    let formRef: QueryList<ElementRef>;
    if(form === '1'){
      formRef = this.inputFirstFormRef;
    }else if(form === '2'){
      formRef = this.inputSecondFormRef;
    }

    if (value.toString().length == 1) {
      this.validationService.onDigitInputFocusNext(inputIndex, formRef!)
      // const nextIndex = inputIndex + 1;
      // if (nextIndex < formRef!.length) {
      //   console.log("En obtener el input adecuado: ", nextIndex);
      //   const nextInputRef = formRef!.get(nextIndex);
      //   console.log("nextInputRef: ", nextInputRef);
      //   if (nextInputRef) {
      //     const nextInput = nextInputRef.nativeElement.firstChild;
      //     console.log("nextInput: ", nextInput);
      //     if (nextInput) {
      //       nextInput.focus();
      //     }
      //   }
      // }
    }

  }

  onVerifySign(){

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

    this.stringSignCode = stringValues;

    this.showRewriteSign = true;


  }

  onSendSign(){
    if(this.stringSignCode.length == 0){
      return
    }

    const createSign = {
      sign: this.stringSignCode,
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
    console.log("En enviar la firma");
  }

  onVerifyRewriteSign(){
    const valueRewrite: string = Object.values(this.signCodeFormVerify.value).join('');
    if(this.stringSignCode.includes(valueRewrite)){
      console.log("Las firmas coinciden");
      this.onSendSign();
    }

  }

}
