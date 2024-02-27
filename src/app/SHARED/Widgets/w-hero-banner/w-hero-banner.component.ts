import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-hero-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-hero-banner.component.html',
  styleUrl: './w-hero-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WHeroBannerComponent { }
