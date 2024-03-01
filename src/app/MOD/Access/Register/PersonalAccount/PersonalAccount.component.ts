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
export default class PersonalAccountComponent { }
