import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
import { LoginService } from './service/login.service';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from './interface/loginRequest.interface';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '@/CORE/Auth/services/token-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    WInputComponent],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenService
  ) {}

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required]],
  });

  // show(){
  //   console.log('loginForm: ', this.loginForm.value);
  //   this.login();
  // }

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
            this.router.navigateByUrl('/inicio');
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
