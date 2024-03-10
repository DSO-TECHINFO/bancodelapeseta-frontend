import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company-form',
  standalone:true,
  imports: [
    CommonModule,
  ],
  templateUrl: './register-company-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterCompanyFormComponent  {

  constructor(private router: Router) { }
  returnToHome() {
    this.router.navigate(['/register']); // Esta ruta debe coincidir con la ruta de la página de inicio
  }
}
