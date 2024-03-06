import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-header.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WHeaderComponent { }
