import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-common-login',
  standalone: true,
  imports: [RouterLink],
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
