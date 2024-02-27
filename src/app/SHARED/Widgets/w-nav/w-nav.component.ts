import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-nav.component.html',
  styleUrl: './w-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WNavComponent { }
