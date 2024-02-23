import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-verification',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css'],
})
export class AccountVerificationComponent {
  imgBancoP = './assets/bancoP.png';

  firstOtp = ""
  secondOtp = ""

  verifyAccount() {
    console.log("First OTP: " + this.firstOtp + " Second OTP: " + this.secondOtp)
  }

  // @Input({ required: true })
  // valueFromParent: string = '';

  // @Output()
  // updateEvent = new EventEmitter<string>();

  // updateValue() {
  //   this.updateEvent.emit('Send updated value');
  // }
}
