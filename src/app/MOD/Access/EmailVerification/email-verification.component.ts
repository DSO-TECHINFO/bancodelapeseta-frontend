import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerificationService } from '../Verification/service/verification.service';
import { VerificationCodeService } from '@/CORE/Context/service/verification-code-storage.service';
import { CodeDto } from '../SmsVerification/dto/CodeDto';
import { WInputComponent } from '@/SHARED/Widgets/input-app';
import { ValidationService } from '@/GENERIC/UTILS/validation.service';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, ReactiveFormsModule, WInputComponent],
  templateUrl: './email-verification.component.html',
})
export default class EmailVerificationComponent implements OnInit{

  @ViewChildren('inputRef', { read: ElementRef }) inputRefs!: QueryList<ElementRef>;

  code: string = '';

  constructor(
    private verificationService: VerificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private verificationCodeService: VerificationCodeService,
    private validationService: ValidationService
  ){}

  verificationCodeForm = this.formBuilder.group({});

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
        this.verificationCodeService.setEmailExpCode(userData['expirationDate'])
        console.log("Send userData sms verification code: ", userData);
      },
      error: (err) => {
        console.error('No se pudo enviar el código de verificación por correo. El error es: ', err);
      },
      complete: () => {
      },
    })
    throw new Error('Method not implemented.');
  }

  onDigitInput(inputIndex: number, event: any) {

    const value = event.event.key;

    if (value.toString().length == 1) {
      this.validationService.onDigitInputFocusNext(inputIndex, this.inputRefs)
    }

  }

  onVerifyCode(){

    this.code = Object.values(this.verificationCodeForm.value).join('');

    if(this.code.length == 0){
      return
    }

    const codeDto = {
      code: this.code
    }

    this.verificationService.verifyEmailCode(codeDto as CodeDto, 'api/v1/verify/email').subscribe({
      next: (userData) => {
        this.verificationCodeService.setEmailCode(this.code);
      },
      error: (err) => {
        console.error('Incorrect code: ', err);
      },
      complete: () => {
        this.router.navigateByUrl('/create-sign');
        this.verificationCodeForm.reset();
      },
    })
  }

}
