import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import  { RouterLink } from '@angular/router';
@Component({
  selector: 'app-trading-options',
  standalone: true,
  imports: [CommonModule, WInputComponent,RouterLink],
  templateUrl: './trading-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingOptionsComponent {
  constructor() {}  
}
