import { WInputComponent } from '@/SHARED/Widgets/input-app';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
// import { PasswordValidatorDirective } from '@/SHARED/Directives/password-validator.directive'; // TODO: REMOVE THIS
// import { TokenService } from '@/CORE/Auth/services/token-service.service';
// import { LoginRequest } from '../../Login/interface/loginRequest.interface';
// import { LoginService } from '../../Login/service/login.service';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    WInputComponent,
  ],
  templateUrl: './register-company.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterCompanyFormComponent {
  //
  title = 'Company sign up';

  // constructor(private router: Router) {}

  data = {
    name: "", // "Programa",
    taxId:"", // "B123456789",
    password:"", // "%Testing12",
    address:"", // "Calle hola mi amigo",
    addressAdditionalInfo:"", // "Piso 2 Escalera 3",
    postalCode: "", // "22454",
    addressTown:"", // "Madrid",
    addressCity:"", // "Madrid",
    addressCountry:"", // "España",
    phoneNumber:"", // "665666555",
    email:"", // "test@test.com",
    debtType:"", // "PYME",
    settingUpDate: "", // "2021-07-01"
  }
  

  registrationFormValues = {
    companyName: '',
    taxId: '',
    addressCountry: '',
    postalCode: '',
    addressCity: '',
    addressTown: '',
    address: '',
    addressAdditionalInfo: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private loginService: LoginService,
    // private tokenService: TokenService

  ) {
    // if(tokenService.getToken()){
    //   router.navigate(['/dashboard'])
    // }
  }
  // customPattern: string = '^[0-9@]*$'

  registrationForm = this.formBuilder.group({
    // companyName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    // taxId: ['', [Validators.required]],
  });
  
  signup() {
    console.log("bank");
    // console.log(this.registrationForm.controls?.companyName);
    //
    // if (this.registrationForm.valid) {
    //   this.loginService
    //     .login(this.registrationForm.value as LoginRequest, 'api/v1/auth/login')
    //     .subscribe({
    //       next: (userData) => {
    //         this.tokenService.setToken(userData['token']);
    //       },
    //       error: (err) => {
    //         console.error(err);
    //       },
    //       complete: () => {
    //         this.router.navigateByUrl('/dashboard');
    //         this.registrationForm.reset();
    //       },
    //     });
    // } else {
    //   this.registrationForm.markAllAsTouched();
    // }
  }

  // get username(){
  //   return this.registrationForm.controls.username;
  // }

}
