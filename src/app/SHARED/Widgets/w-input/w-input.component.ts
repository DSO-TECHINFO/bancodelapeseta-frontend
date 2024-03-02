import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'w-input',
  standalone: true,
  imports: [
    CommonModule, IonicModule,ReactiveFormsModule
  ],
  templateUrl: './w-input.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WInputComponent {
  @Input() iconSrc: string = '';
  // optional inputs
  name = input<string>();
  id = input<string>();
  formControlName = input<string>();

  // required inputs
  type = input.required<string>();
  decription = input.required<string>();

}
