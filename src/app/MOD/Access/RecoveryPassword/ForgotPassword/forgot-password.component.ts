import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { VerificationService } from '../../Verification/service/verification.service';
import IForgoPasswordReq from './interface/iForgoPasswordReq.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  imports: [WInputComponent, CommonModule, ReactiveFormsModule, RouterLink],
})
export default class ForgotPasswordComponent {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private verificationService: VerificationService,
    private toastr: ToastrService
  ) {}

  forgotPass = this.formBuilder.group({});

  onForgotPass() {

    const taxId = this.forgotPass.get('taxId')!.value;

    if(taxId !== null){
      this.router.navigate(['/validate-codes', JSON.stringify(this.forgotPass.value as IForgoPasswordReq)], {skipLocationChange: true});
    }

    this.verificationService.sendEmailAndPhoneCodePasswordRecovery(this.forgotPass.value as IForgoPasswordReq, 'api/v1/auth/recovery/password').subscribe({
      next: (userData) => {
        console.log("En next: ", userData);
      },
      error: (err) => {
        this.showerror(err);
      },
      complete: () => {
        console.log("En complete");
        this.forgotPass.reset();
        this.showsuccess();
        this.router.navigateByUrl('/validate-codes');
      },

    })

  }

  //alertas
  showsuccess(){
    this.toastr.success('Verification codes for email and phone number have been send.', 'Success');
  }

  showerror(err: any){
    this.toastr.error(err, 'Error');
  }


}
