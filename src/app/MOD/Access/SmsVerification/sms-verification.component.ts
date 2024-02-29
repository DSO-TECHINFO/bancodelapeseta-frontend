import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sms-verification',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './sms-verification.component.html',
})
export default class SmsVerificationComponent { }
