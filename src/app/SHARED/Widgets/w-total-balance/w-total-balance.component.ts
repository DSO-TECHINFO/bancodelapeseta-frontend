
import { CardService } from '@/MOD/Dashboard/Pages/cards/services/cardservice.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError, finalize, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { CurrencyGlobalState } from './currency.service';
import { AccountService } from '@/MOD/Dashboard/services/account.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'w-total-balance',
  templateUrl: './w-total-balance.component.html',
  standalone:true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],

})
export class WTotalBalanceComponent implements OnInit {
  currencySelect = new FormControl();
  totalAmount: number = 0;
  currencyRates: { [key: string]: number } = {};
  isLoading: boolean = false;

  constructor(
    private cardService: CardService,
    private accountService: AccountService,
    private currencyGlobalState: CurrencyGlobalState,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.cardService
      .getExchangeRate()
      .pipe(
        catchError((error) => {
          console.error('Error fetching exchange rates:', error);
          return throwError('Error fetching exchange rates');
        }),
        map((response) => response.rates),
        tap((rates) => {
          this.currencyRates = rates;
          const storedCurrency = this.currencyGlobalState.getSelectedCurrency();
          const initialCurrency = storedCurrency ? storedCurrency : Object.keys(rates)[0];
          this.currencySelect.setValue(initialCurrency);
        }),
        switchMap(() =>
          this.accountService.getAccounts('api/v1/accounts').pipe(
            map((accounts) => {
              const selectedCurrency = this.currencySelect.value;
              const selectedRate = this.currencyRates[selectedCurrency];
              return accounts.reduce((total, accountData) => {
                const balance = accountData.contract.account.balance;
                return total + balance * selectedRate;
              }, 0);
            })
          )
        ),
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe((total) => {
        this.totalAmount = total;
      });
  }

  formatCurrency(value: number, currencySymbol: string): string {
    if (currencySymbol && value !== null && value !== undefined) {
      const formattedValue = value.toLocaleString('en-US', {
        style: 'currency',
        currency: currencySymbol,
      });
      return formattedValue.replace(currencySymbol, currencySymbol + ' ');
    } else {
      return '';
    }
  }

  updateSelectedCurrency(event: any) {
    const selectedCurrency = event.target.value;
    this.currencyGlobalState.setSelectedCurrency(selectedCurrency);
    this.calculateTotal(); // Actualizar precio total cuando cambie la moneda seleccionada
  }

  calculateTotal() {
    const selectedCurrency = this.currencySelect.value;
    const selectedRate = this.currencyRates[selectedCurrency];

    this.accountService.getAccounts('api/v1/accounts').pipe(
      map((accounts) => {
        return accounts.reduce((total, accountData) => {
          const balance = accountData.contract.account.balance;
          return total + balance * selectedRate;
        }, 0);
      })
    )
    .subscribe((total) => {
      this.totalAmount = total;
      this.cdr.detectChanges();
    });
  }
}
