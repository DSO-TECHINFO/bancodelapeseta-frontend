import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-codes-verification',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './codes-verification.component.html',
})
export default class CodesVerificationComponent {
  //

  firstOtp = '';
  secondOtp = '';

  constructor() { }

  // Example function to show how you can use firstOtp
  submitOtp() {
    console.log(this.firstOtp); // Do something with the value
  }
}
