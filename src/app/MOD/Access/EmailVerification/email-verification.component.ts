import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerificationService } from '../Verification/service/verification.service';
import { VerificationCodeService } from '@/CORE/Context/service/verification-code-storage.service';
import { CodeDto } from '../SmsVerification/dto/codeDto';
import { WInputComponent } from '@/SHARED/Widgets/input-app';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, ReactiveFormsModule, WInputComponent],
  templateUrl: './email-verification.component.html',
})
export default class EmailVerificationComponent implements OnInit{

  @ViewChildren('inputRef', { read: ElementRef }) inputRefs!: QueryList<ElementRef>;

  code: string = '';
  codeDto: CodeDto = new CodeDto();

  constructor(
    private verificationService: VerificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private verificationCodeService: VerificationCodeService
  ){}

  verificationCodeForm = this.formBuilder.group({
    // numb1: ['', [Validators.required]],
    // numb2: ['', [Validators.required]],
    // numb3: ['', [Validators.required]],
    // numb4: ['', [Validators.required]],
    // numb5: ['', [Validators.required]],
    // numb6: ['', [Validators.required]],
  });

  inputConfigs = [
    { name: 'numb1', type: 'tel', visible: true },
    { name: 'numb2', type: 'tel', visible: true },
    { name: 'numb3', type: 'tel', visible: true },
    { name: 'numb4', type: 'tel', visible: true },
    { name: 'numb5', type: 'tel', visible: true },
    { name: 'numb6', type: 'tel', visible: true },
  ];

  ngOnInit(): void {
    this.verificationService.sendEmailVerificationCode('api/v1/send/email/verification/code').subscribe({
      next: (userData) => {
        this.router.navigateByUrl('/email-verification');
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

  onVerifyCode(){
    console.log('verificationCodeForm: ', this.verificationCodeForm.value);
    this.onStringCode();

    if(this.code.length == 0){
      return
    }

    this.verificationService.verifyEmailCode(this.codeDto, 'api/v1/verify/email').subscribe({
      next: (userData) => {
        this.verificationCodeService.setEmailCode(this.code);
      },
      error: (err) => {
        console.error('Incorrect code: ', err);
      },
      complete: () => {
        // this.router.navigateByUrl('/email-verification');
        this.verificationCodeForm.reset();
      },
    })
  }

  onStringCode(){

    const numb1 = this.verificationCodeForm.get('numb1')?.value;
    const numb2 = this.verificationCodeForm.get('numb2')?.value;
    const numb3 = this.verificationCodeForm.get('numb3')?.value;
    const numb4 = this.verificationCodeForm.get('numb4')?.value;
    const numb5 = this.verificationCodeForm.get('numb5')?.value;
    const numb6 = this.verificationCodeForm.get('numb6')?.value;

    this.code = `${numb1}${numb2}${numb3}${numb4}${numb5}${numb6}`;
    this.codeDto.code = this.code;

    console.log('code: ', this.code);
  }

}
