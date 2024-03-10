import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalAccountService } from './service/personalAccount.service';
import IPersonlAccountReq from './interface/personalAccountReq.interface';

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [
    CommonModule,
    WInputComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './PersonalAccount.component.html',
  styleUrl: './PersonalAccount.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PersonalAccountComponent {
  public classStyle = 'mt-1 p-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
  
  constructor(private formBuilder:FormBuilder, private router:Router){}

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
          console.log(err.reason);
        },
        complete:()=>{
          this.router.navigate(['/sms-verification']);
          this.registerPersonForm.reset();
        }
      })
    }else{
      this.registerPersonForm.markAllAsTouched();
    }
  }

}