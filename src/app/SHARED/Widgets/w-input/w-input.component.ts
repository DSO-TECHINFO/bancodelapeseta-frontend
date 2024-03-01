import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'w-input',
  standalone: true,
  imports: [
    CommonModule,
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

  // optional inputs
  name = input<string>();
  id = input<string>();
  // required inputs
  type = input.required<string>();
  decription = input.required<string>();

}
