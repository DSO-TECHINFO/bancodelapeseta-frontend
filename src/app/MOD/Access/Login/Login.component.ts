import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent { }
