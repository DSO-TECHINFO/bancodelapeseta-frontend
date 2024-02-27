import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    WInputComponent
  ],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent { }
