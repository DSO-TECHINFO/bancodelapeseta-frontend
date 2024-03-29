import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { TranslateModule } from '@ngx-translate/core';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
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

  accountsData:any;
  accounts$ = this.accountService.getAccounts('api/v1/accounts').subscribe({
    next:(data)=>{this.accountsData=data},
  })

  constructor(private accountService: AccountService, private ts:TokenService) {
    
  }
  
}
