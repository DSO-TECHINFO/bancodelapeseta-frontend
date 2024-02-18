import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterIndividualComponent } from './register-individual/register-individual.component';

@NgModule({
  declarations: [
    RegisterCompanyComponent,
    RegisterIndividualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class RegisterModule { }
