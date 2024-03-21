import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from './service/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule],
})
export default class ClientesComponent {
  accounts$ = this.accountService.getAccounts('api/v1/accounts');

  constructor(private accountService: AccountService) {}
}
