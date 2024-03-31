import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { TranslateModule } from '@ngx-translate/core';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { WTotalBalanceComponent } from '@/SHARED/Widgets/w-total-balance/w-total-balance.component';
@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    CommonModule,TranslateModule, WTotalBalanceComponent
  ],
  templateUrl: './myAccounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyAccountsComponent implements OnInit{
  dataAccounts :any;

  accounts$ = this.accountService.getAccounts('api/v1/accounts')

  constructor(private accountService: AccountService, private ts:TokenService, private cdr:ChangeDetectorRef, private router:Router) {

  }
  ngOnInit(): void {
    this.accountService.getAccounts('api/v1/accounts').subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.dataAccounts = data
          this.cdr.detectChanges()},
        error:(err)=>{
          this.ts.removeToken();
          this.router.navigateByUrl('/login');
        }
      }
    )
  }

}
