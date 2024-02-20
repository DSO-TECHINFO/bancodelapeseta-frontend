import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import 'material-icons/iconfont/material-icons.css';

@Component({
  selector: 'app-account-verification',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-verification.component.html',
  styleUrl: './account-verification.component.css'
})
export class AccountVerificationComponent {
  hide: boolean = false;
  imgBancoP = 'assets/icon/bancoP.png';

  onLoad: boolean = false;
  onKeyPress(event: KeyboardEvent) {
    // Code goes here
  }
}
