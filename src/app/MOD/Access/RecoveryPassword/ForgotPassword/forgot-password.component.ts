import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { VerificationService } from '../../Verification/service/verification.service';
import IForgoPasswordReq from './interface/iForgoPasswordReq.interface';
import { ToastrService } from 'ngx-toastr';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  imports: [WInputComponent, CommonModule, ReactiveFormsModule, RouterLink, IonicModule, ],
})
export default class ForgotPasswordComponent {

  currentDate: string = '';

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
      this.getCurrentDate();
      this.forgotPass.addControl('settingUpDate', new FormControl(this.currentDate, []));
    }

    this.verificationService.sendEmailAndPhoneCodePasswordRecovery(this.forgotPass.value as IForgoPasswordReq, 'api/v1/auth/recovery/password').subscribe({
      // next: (res) => {
      //   console.log("En next: ", res);
      // },
      error: (err) => {
        this.showerror(err);
      },
      complete: () => {
        console.log("En complete");
        this.forgotPass.reset();
        this.showsuccess();
        this.router.navigate(['/validate-codes', JSON.stringify(this.forgotPass.value as IForgoPasswordReq)], {skipLocationChange: true});
      },

    })

  }

  getCurrentDate(){
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    this.currentDate = `${year}-${month}-${day}`;

  }

  //alertas
  showsuccess(){
    this.toastr.success('Verification codes for email and phone number have been send.', 'Success');
  }

  showerror(err: any){
    this.toastr.error(err, 'Error');
  }


}
