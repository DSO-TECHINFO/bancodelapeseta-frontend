import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterOutlet],
})
export default class ClientesComponent {
  accounts$ = this.accountService.getAccounts('api/v1/accounts');
  

  constructor(private accountService: AccountService) {
    
  }
}
