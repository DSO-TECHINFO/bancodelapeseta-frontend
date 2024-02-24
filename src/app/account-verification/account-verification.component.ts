import { Component } from '@angular/core';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-account-verification',
  standalone: true,
  imports: [NgFor],
  templateUrl: './account-verification.component.html',
  styleUrl: './account-verification.component.css'
})
export class AccountVerificationComponent {
  hide: boolean = false;
  imgBancoP = './assets/bancoP.png'


}
