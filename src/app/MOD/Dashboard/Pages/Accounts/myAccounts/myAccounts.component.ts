import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    CommonModule,TranslateModule
  ],
  templateUrl: './myAccounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyAccountsComponent { 

  accounts$ = this.accountService.getAccounts('api/v1/accounts');
  constructor(private accountService: AccountService) {
    
  }
  
}
