import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [
    CommonModule,WInputComponent
  ],
  templateUrl: './PersonalAccount.component.html',
  styleUrl: './PersonalAccount.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PersonalAccountComponent {
  public classStyle = 'mt-1 p-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
 }
