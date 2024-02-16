import { Component } from '@angular/core';

@Component({
  selector: 'app-common-login',
  standalone: true,
  imports: [],
  templateUrl: './common-login.component.html',
  styleUrl: './common-login.component.css'
})
export class CommonLoginComponent {
  hide: boolean = false;

  onLoad: boolean = false;
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      //this.onSubmitLogin();
    }
  }
}
