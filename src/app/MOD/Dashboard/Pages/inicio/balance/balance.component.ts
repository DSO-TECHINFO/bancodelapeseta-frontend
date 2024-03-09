import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'balance-component',
  standalone: true,
  imports: [TranslateModule, FormsModule, AsyncPipe],
  templateUrl: './balance.component.html',
})
export default class BalanceComponent implements OnInit{

  currencyList: any[] = [];
  accountsList: any[] = [];
  selectedCurrency: any;
  selectedCurrencyString: string = '';

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.startPanelService.getCurrency('api/v1/exchange')
    .subscribe({
      next: (userData) => {
        // console.log("Currency: ", userData);
        this.currencyList = userData;
        this.cdr.detectChanges();
        console.log("Currency: ", this.currencyList);
      },
      error: (err) => {
        console.error('No se pudo obtener currency: ', err);
      },
      complete: () => {
        this.getAccounts()
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
        console.error('No se pudo enviar el código de verificación por correo. El error es: ', err);
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

}
