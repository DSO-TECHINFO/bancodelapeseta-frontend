import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-recovery-change',
  templateUrl: './password-recovery-change.component.html',
  standalone:true,
  imports:[CommonModule, WInputComponent, RouterLink, ReactiveFormsModule, IonicModule]
})
export default class PasswordRecoveryChangeComponent {

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  passwordChange = this.formBuilder.group({});
}
