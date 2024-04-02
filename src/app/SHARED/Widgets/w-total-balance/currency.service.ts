import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGlobalState {
  private selectedCurrency: string | null = null;

  setSelectedCurrency(currency: string) {
    this.selectedCurrency = currency;
    localStorage.setItem('selectedCurrency', currency);
  }

  getSelectedCurrency(): string | null {
    if (!this.selectedCurrency) {
      this.selectedCurrency = localStorage.getItem('selectedCurrency');
    }
    return this.selectedCurrency;
  }
}
