import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './register.component.html',
  styles: '',
})
export default class RegisterComponent { }
