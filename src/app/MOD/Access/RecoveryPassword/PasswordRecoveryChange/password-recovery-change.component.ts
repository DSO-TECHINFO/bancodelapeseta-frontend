import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import newPassword from '../ForgotPassword/interface/newPassword.interface';
import { VerificationService } from '../../Verification/service/verification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-recovery-change',
  templateUrl: './password-recovery-change.component.html',
  standalone:true,
  imports:[CommonModule, WInputComponent, RouterLink, ReactiveFormsModule]
})
export default class PasswordRecoveryChangeComponent implements OnInit{

  newPasswordObj!: newPassword;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private verificationService: VerificationService,
    private toastr: ToastrService

  ) {}

  ngOnInit(): void {
    this.newPasswordObj= JSON.parse(this.route.snapshot.params['interface'] as string) as newPassword;
    console.log("newPasswordObj: ", this.newPasswordObj);
  }

  passwordChange = this.formBuilder.group({});

  onSendNewPassword(){
    const newPass: string = this.passwordChange.get('newPass')!.value;
    const newPassRewrite: string = this.passwordChange.get('newPassRewrite')!.value;

    if(newPass !== newPassRewrite){
      this.showerror("Passwords don't match.");
      return;
    }

    if(newPass.length == 0){
      return;
    }

    if(newPassRewrite.length == 0){
      return;
    }

    this.newPasswordObj.newPassword = newPassRewrite;

    this.verificationService.changePassword(this.newPasswordObj, 'api/v1/auth/recovery/password/change').subscribe({
      next: (res) => {
      },
      error: (err) => {
      },
      complete: () => {
        console.log("En complete");
        this.passwordChange.reset();
        this.showsuccess();
        this.router.navigateByUrl('/login');
      },

    })

  }

  showsuccess(){
    this.toastr.success('Password change successfully.', 'Success');
  }

  showerror(err: any){
    this.toastr.error(err, 'Error');
  }


}
