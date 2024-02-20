import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-login.component.html',
  styleUrl: './account-login.component.css'
})
export class AccountLoginComponent {
  hide: boolean = false;
  imgBancoP = 'assets/icon/bancoP.png';
  imgLogo3 = 'assets/logo/logo3.png';

  onLoad: boolean = false;
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      //this.onSubmitLogin();
    }
  }
}
