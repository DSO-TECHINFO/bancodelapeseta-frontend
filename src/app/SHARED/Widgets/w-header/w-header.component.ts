import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-header.component.html',
  styleUrl: './w-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WHeaderComponent { }
