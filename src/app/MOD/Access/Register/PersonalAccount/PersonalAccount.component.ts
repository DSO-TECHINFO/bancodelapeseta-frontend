import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PersonalAccountService } from './service/personalAccount.service';
import IPersonlAccountReq from './interface/personalAccountReq.interface';
import { ToastrService } from 'ngx-toastr';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [
    CommonModule,
    WInputComponent,
    ReactiveFormsModule,
    RouterLink,
    IonicModule
  ],
  templateUrl: './PersonalAccount.component.html',
  styleUrl: './PersonalAccount.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PersonalAccountComponent {
  public classStyle = 'mt-1 p-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'

  constructor(private formBuilder:FormBuilder, private router:Router,  private toastr: ToastrService){}

  private SCreatePersonalAccount = inject(PersonalAccountService);

  registerPersonForm = this.formBuilder.group({type:['PHYSICAL']});

  returnToRegister() {
    this.router.navigate(['/register']);
  }

  createPersonalAccount(){
    console.log(this.registerPersonForm.value)
    if(this.registerPersonForm.valid) {
      this.SCreatePersonalAccount.createPersonalAccount(this.registerPersonForm.value as IPersonlAccountReq,'api/v1/auth/register/physical').subscribe({
        next:(response)=>{
          console.log('next')
        },
        error:(err)=>{
          this.showerror();
          console.log(err.reason);
        },
        complete:()=>{
          this.showsuccess();
          this.router.navigate(['/sms-verification']);
          this.registerPersonForm.reset();
        }
      })
    }else{
      this.registerPersonForm.markAllAsTouched();
    }
  }

  showsuccess(){
    this.toastr.success('Register sucessfully.', 'Success');
  }
  showerror(){
    this.toastr.error('Invalid form, check credentials ', 'Error');
  }
}
