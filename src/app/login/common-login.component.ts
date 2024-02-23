import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../service/login/login.service';
import { LoginRequest } from '../../interface/login/loginRequest';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-common-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './common-login.component.html',
  styleUrl: './common-login.component.css'
})
export class CommonLoginComponent {
  errorMessage: string = '';
  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginService:LoginService
    ) {}

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required, Validators.minLength(4)]],
    password: ['',[Validators.required]]
  });

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest,'api/v1/auth/login').subscribe({
        next:(userData)=>{
          localStorage.setItem('token', userData['token']);
        },
        error:(err)=>{
          console.error(err);
          this.errorMessage=err;
        },
        complete:()=>{
          this.router.navigateByUrl('/inicio')
          this.loginForm.reset()
        }
      })
      
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }
}