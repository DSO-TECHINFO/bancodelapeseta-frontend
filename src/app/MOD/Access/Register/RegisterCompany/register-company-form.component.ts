import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterCompanyService } from './service/registerCompany.service';
import { RegisterCompanyRequest } from './interface/registerCompanyRequest.interface';

@Component({
  selector: 'app-register-company-form',
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
  templateUrl: './register-company-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterCompanyFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerCompanyService: RegisterCompanyService
  ) {}

  registrationForm = this.formBuilder.group({
    // companyName: ['', [Validators.required]],
  });

  signup() {
    if (this.registrationForm.valid) {
      this.registerCompanyService
        .signup(
          this.registrationForm.value as RegisterCompanyRequest,
          'api/v1/auth/register/company'
        )
        .subscribe({
          next: response => {
            //
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            this.router.navigateByUrl('/verify-email');
            this.registrationForm.reset();
          },
        });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
