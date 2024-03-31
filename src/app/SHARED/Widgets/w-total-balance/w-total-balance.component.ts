import { AccountService } from '@/MOD/Dashboard/Pages/Accounts/service/account.service';
import { CardService } from '@/MOD/Dashboard/Pages/cards/services/cardservice.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { CurrencyGlobalState } from './currency.service';

@Component({
  selector: 'w-total-balance',
  templateUrl: './w-total-balance.component.html',
  standalone:true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule],

})
export class WTotalBalanceComponent implements OnInit {
  currencySelect = new FormControl();
  totalAmount: number = 0;
  currencyRates: { [key: string]: number } = {};

  constructor(
    private cardService: CardService,
    private accountService: AccountService,
    private currencyGlobalState: CurrencyGlobalState
  ) {}

  ngOnInit() {
    this.cardService
      .getExchangeRate()
      .pipe(
        catchError((error) => {
          console.error('Error fetching exchange rates:', error);
          return throwError('Error fetching exchange rates');
        }),
        map((response) => response.rates)
      )
      .subscribe((rates) => {
        this.currencyRates = rates;
        const storedCurrency = this.currencyGlobalState.getSelectedCurrency();
        const initialCurrency = storedCurrency ? storedCurrency : Object.keys(rates)[0];
        if (this.currencySelect) { // Comprobación de nulidad
          this.currencySelect.setValue(initialCurrency);
        }
      });

    if (this.currencySelect) { // Comprobación de nulidad
      this.currencySelect.valueChanges
        .pipe(
          switchMap((selectedCurrency) =>
            this.accountService.getAccounts('api/v1/accounts').pipe(
              map((accounts) => {
                const selectedRate = this.currencyRates[selectedCurrency];
                return accounts.reduce((total, accountData) => {
                  const balance = accountData.contract.account.balance;
                  return total + balance * selectedRate;
                }, 0);
              })
            )
          )
        )
        .subscribe((total) => (this.totalAmount = total));
    }
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
  }

}
