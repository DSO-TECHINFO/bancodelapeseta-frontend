import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone:true,
  imports:[WInputComponent,CommonModule,
    RouterLink]

})
export default class ForgotPasswordComponent  {



}
