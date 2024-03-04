import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'w-custom-input',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  template: `
    <ion-item class="custom-input" line="none">
      <ion-icon color="primary" *ngIf="icon" slot="start" [name]="icon"></ion-icon>
      <ion-input
        [type]="type"
        [formControl]="inputValue"
        [label]="label"
        label-placement="floating"
        class="mb-2"
      ></ion-input>
    </ion-item>
  `,
  styles: ``,
})
export class CustomInputComponent implements OnInit {
  @Input() label: string = 'Placeholder del Input';
  @Input() type!: string;
  @Input() icon!: string;

  inputValue: FormControl

  constructor() {
    this.inputValue = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    throw new Error('Debe ser Inicializado');
  }

}
