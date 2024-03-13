import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CurrencyExchangeList } from '../interface/currencyExchange.interface';

@Component({
  selector: 'balance-component',
  standalone: true,
  imports: [TranslateModule, FormsModule, AsyncPipe],
  templateUrl: './balance.component.html',
})
export default class BalanceComponent implements OnInit{

  currencyList: any[] = [];
  accountsList: any[] = [];
  currencyExchangeList: CurrencyExchangeList = {
    rates: {}
  };
  selectedCurrency: any;
  selectedCurrencyString: string = '';
  selectedCurrencyRate: number = 1;

  @Output() currencyRate = new EventEmitter<number>();

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.getAccounts();

    this.startPanelService.getCurrency('assets/currency.json')
    .subscribe({
      next: (res) => {
        this.currencyList = res;
        this.cdr.detectChanges();
        console.log("Currency: ", this.currencyList);
      },
      error: (err) => {
        console.error('Could not get currency: ', err);
      },
    })

    this.startPanelService.getCurrencyExchange('assets/currency-exchange.json')
    .subscribe({
      next: (res) => {
        this.currencyExchangeList = res;
        this.cdr.detectChanges();
        console.log("Currency: ", this.currencyExchangeList);
      },
      error: (err) => {
        console.error('Could not get currency exchange: ', err);
      },
    })

    throw new Error('Method not implemented.');
  }

  getAccounts(){
    this.startPanelService.getAccounts('api/v1/accounts').subscribe({
      next: (userData) => {
        console.log("Accounts: ", userData);
        this.accountsList = userData;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.error('Could not get accounts: ', err);
      },
      complete: () => {
        this.setDefaultCurrency();
      },
    })
  }

  setDefaultCurrency(): void {
    if (this.accountsList.length > 0) {
      const defaultCurrency = this.accountsList[0].contract.account.currency.currency;
      this.selectedCurrencyString = defaultCurrency;
      this.cdr.detectChanges();
    }
  }

  onCurrencyChange(){
    this.selectedCurrencyRate = this.currencyExchangeList.rates[this.selectedCurrencyString];

    if (this.selectedCurrencyRate !== undefined) {
      console.log(`Factor ${this.selectedCurrencyString}: ${this.selectedCurrencyRate}`);
      this.currencyRate.emit(this.selectedCurrencyRate);
    } else {
      console.error(`Conversion factor not found for ${this.selectedCurrencyString}`);
    }

  }

}
