import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-open-an-account',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './openAnAccount.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OpenAnAccountComponent { }
