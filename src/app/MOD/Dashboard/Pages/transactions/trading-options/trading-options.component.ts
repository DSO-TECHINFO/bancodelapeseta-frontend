import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import  { Router, RouterLink } from '@angular/router';
import { AccountService } from '@/MOD/Dashboard/services/account.service';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedAccountNumberService } from '../service/sharedAccountNumber.service';
@Component({
  selector: 'app-trading-options',
  standalone: true,
  imports: [CommonModule, WInputComponent,RouterLink,TranslateModule],
  templateUrl: './trading-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingOptionsComponent implements OnInit{
  dataAccounts :any;

  accounts$ = this.accountService.getAccounts('api/v1/accounts')

  constructor(private accountService: AccountService, private ts:TokenService, private cdr:ChangeDetectorRef, private router:Router, private sharedNumberAccount:SharedAccountNumberService) {
    
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
  onSelectAccount(key:string){
    this.sharedNumberAccount.accountNumberData = key;
  }
}
