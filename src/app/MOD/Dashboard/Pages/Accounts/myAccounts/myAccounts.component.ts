import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { TranslateModule } from '@ngx-translate/core';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { IAccountData } from '../interface/IAccount';
@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    CommonModule,TranslateModule
  ],
  templateUrl: './myAccounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyAccountsComponent implements OnInit{ 
  dataAccounts :any;
  accounts$ = this.accountService.getAccounts('api/v1/accounts');
  totalAvailable:number=0;

  constructor(private accountService: AccountService, private ts:TokenService, private cdr:ChangeDetectorRef, private router:Router) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts('api/v1/accounts').subscribe(
      {
        next:(data)=>{
          this.dataAccounts = data
          this.cdr.detectChanges()},
        error:(err)=>{
          this.ts.removeToken();
          this.router.navigateByUrl('/login');
        }
      }
    )
  }
  totalBalance(data:IAccountData[]):number{
    let totalAvailableBalance:number = 0;
    if(Array.isArray(data)){
      data.forEach((data)=>{
        return totalAvailableBalance += data.contract.account.balance;
      })
    }
    this.totalAvailable = totalAvailableBalance;
    return totalAvailableBalance;
  }
}
