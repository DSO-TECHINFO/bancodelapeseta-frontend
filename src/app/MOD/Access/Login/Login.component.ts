import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from './interface/loginRequest.interface';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    WInputComponent,
  ],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {
    if (tokenService.getToken()) {
      router.navigate(['/dashboard']);
    }
  }
  // customPattern: string = '^[0-9@]*$'
  loginForm = this.formBuilder.group({
    // username: ['', [Validators.required, Validators.minLength(4)]],
    // password: ['', [Validators.required]],
  });
  login() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value as LoginRequest, 'api/v1/auth/login')
        .subscribe({
          next: (userData) => {
            this.tokenService.setToken(userData['token']);
          },
          error: (err) => {
            this.showerror();
            console.error(err);
          },
          complete: () => {
            this.showsuccess();
            this.router.navigateByUrl('/dashboard');
            this.loginForm.reset();
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  //alertas
  showsuccess() {
    this.toastr.success('Login sucessfully.', 'Success');
  }

  showerror() {
    this.toastr.error('Invalid Credentials', 'Error');
  }
}
