import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from './service/account.service';
import { IAccountData } from './interface/IAccount';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule],
})
export default class ClientesComponent implements OnInit {
  accountData: IAccountData[] = [];

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.showAccount();
  }
  showAccount() {
    this.accountService.getAccounts('api/v1/accounts').subscribe(
      {
        next: (data: IAccountData[]) => {console.log(data);  this.accountData = data},
      }
    );
  }
}
