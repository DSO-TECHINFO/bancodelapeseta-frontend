import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'w-header-register',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-header-register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WHeaderRegisterComponent {

  // optional inputs
  subtitle = input<string>();
  // required inputs
  title = input.required<string>();

}
