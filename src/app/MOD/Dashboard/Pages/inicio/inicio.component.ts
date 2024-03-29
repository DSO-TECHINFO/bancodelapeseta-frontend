import { AfterContentChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { CardService } from '../cards/services/cardservice.service';
import { Router } from '@angular/router';
import { CardData } from '../cards/interface/cardResponsive.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent,
    NgxChartsModule,
    FormsModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit{
  constructor(private cardService: CardService, private router: Router) {}
  @Output() currencyExchangeList = new EventEmitter<any>();

  accountsList: any[] = [];
  currencyExchangeRate: number = 1;
  onRateSelected(rate: number){
    this.currencyExchangeRate = rate;
  }

  cardDataList: CardData[] = [];
  filteredCardDataList: CardData[] = [];
  totalAmount: number = 0;
  currency$ = this.cardService.getCurrency('api/v1/currency');
  selectedCurrency: string = '';

  ngOnInit() {
    this.currency$ = this.cardService.getCurrency('api/v1/currency');
    this.currency$.subscribe(currencies => {
      if (currencies.length > 0) {
        const storedCurrency = localStorage.getItem('selectedCurrency');
        this.selectedCurrency = storedCurrency
          ? storedCurrency
          : currencies[0].currency;
      }
    });

    this.cardService.getCardData().subscribe(data => {
      this.cardDataList = data;
      this.filteredCardDataList = data;
      this.totalAmount = this.filteredCardDataList.reduce(
        (total, card) => total + card.amount,
        0
      );
    });
  }

  onSelectChange(event: any) {
    if (event && event.target && event.target.value) {
      this.selectedCurrency = event.target.value;
      localStorage.setItem('selectedCurrency', this.selectedCurrency);
      console.log('selectedCurrency in onSelectChange:', this.selectedCurrency);
    }
  }

  filterCards(tab: string) {
    this.filteredCardDataList = this.cardDataList.filter(card => {
      return tab === 'All' || card.type === tab.toUpperCase();
    });
  }
  formatCurrency(value: number, currencySymbol: string): string {
    const formattedValue = value.toLocaleString('en-US', {
      style: 'currency',
      currency: currencySymbol,
    });
    return formattedValue.replace(currencySymbol, currencySymbol + ' ');
  }

}
