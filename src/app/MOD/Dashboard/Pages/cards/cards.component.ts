import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';

import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardData } from './interface/cardResponsive.interface';
import { CardService } from './services/cardservice.service';
import { CommonModule } from '@angular/common';
import { WCardFilterTabsComponent } from '@/SHARED/Widgets/w-card-filter-tabs/w-card-filter-tabs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [TranslateModule, WIndividualCardComponent, CommonModule, WCardFilterTabsComponent, FormsModule],
})
export default class CardsComponent implements OnInit {
  constructor(private cardService: CardService) {}

  cardDataList: CardData[] = [];
  filteredCardDataList: CardData[] = [];
  totalAmount: number = 0;
  currency$ = this.cardService.getCurrency('api/v1/currency');
  selectedCurrency: string = '';

  ngOnInit(){
    this.currency$ = this.cardService.getCurrency('api/v1/currency');
    this.currency$.subscribe(currencies => {
      if (currencies.length > 0) {
        const storedCurrency = localStorage.getItem('selectedCurrency');
        this.selectedCurrency = storedCurrency ? storedCurrency : currencies[0].currency;
      }
    });

    const mockCards: CardData[] = [
      {
        id: 1,
        name: 'Sadhu Isaac Cavero Egusquiza Huilca',
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        amount: 10000.25,
        type: 'DEBIT',
        cvv: '123',
      },
      {
        id: 2,
        name: 'Sadhu Isaac Cavero Egusquiza Huilca',
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        amount: 50000.25,
        type: 'CREDIT',
        cvv: '123',
      },
      {
        id: 3,
        name: 'Sadhu Isaac Cavero Egusquiza Huilca',
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        amount: 27000.25,
        type: 'DEBIT',
        cvv: '123',
      },
    ];
    this.cardDataList = mockCards;
    this.filteredCardDataList = mockCards;
    this.totalAmount = this.filteredCardDataList.reduce((total, card) => total + card.amount, 0);
  }

  onSelectChange(event: any) {
    if (event && event.target && event.target.value) {
      this.selectedCurrency = event.target.value;
      localStorage.setItem('selectedCurrency', this.selectedCurrency);
      console.log('selectedCurrency in onSelectChange:', this.selectedCurrency);
    }
  }

  filterCards(tab: string) {
    this.filteredCardDataList = this.cardDataList.filter((card) => {
      return tab === 'All' || card.type === tab.toUpperCase();
    });
  }
  formatCurrency(value: number, currencySymbol: string): string {
    const formattedValue = value.toLocaleString('en-US', { style: 'currency', currency: currencySymbol });
    return formattedValue.replace(currencySymbol, currencySymbol + ' ');
  }


}

