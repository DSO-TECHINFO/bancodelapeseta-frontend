import { Component } from '@angular/core';

@Component({
  selector: 'app-account-verification',
  standalone: true,
  imports: [],
  templateUrl: './account-verification.component.html',
  styleUrl: './account-verification.component.css'
})
export class AccountVerificationComponent {
  hide: boolean = false;
  imgBancoP = './assets/bancoP.png'
}
