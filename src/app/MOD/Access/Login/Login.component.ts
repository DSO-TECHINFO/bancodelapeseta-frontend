import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
import { LoginService } from './service/login.service';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from './interface/loginRequest.interface';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { CustomInputComponent } from '@/SHARED/Widgets/custom-input/custom-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    WInputComponent,
    CustomInputComponent
  ],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenService
  ) {
    if(tokenService.getToken()){
      router.navigate(['/dashboard'])
    }
  }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required]],
  });

  login() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value as LoginRequest, 'api/v1/auth/login')
        .subscribe({
          next: (userData) => {
            this.tokenService.setToken(userData['token']);
            // localStorage.setItem('token', userData['token']);
          },
          error: (err) => {
            console.error(err);
            //this.errorMessage = err;
          },
          complete: () => {
            this.router.navigateByUrl('/dashboard');
            this.loginForm.reset();
          },
        });
    } else {
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
