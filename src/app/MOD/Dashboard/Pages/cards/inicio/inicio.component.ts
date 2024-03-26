import { WCardFilterTabsComponent } from '@/SHARED/Widgets/w-card-filter-tabs/w-card-filter-tabs.component';
import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardService } from '../services/cardservice.service';
import { CardData } from '../interface/cardResponsive.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports:[CommonModule, TranslateModule,WIndividualCardComponent,
    CommonModule,
    WCardFilterTabsComponent,
    FormsModule,
    RouterLink],
  standalone:true
})
export default class InicioComponent implements OnInit{
  constructor(private cardService: CardService, private router: Router) {}
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
