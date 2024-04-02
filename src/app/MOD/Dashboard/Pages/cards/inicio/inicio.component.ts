import { WCardFilterTabsComponent } from '@/SHARED/Widgets/w-card-filter-tabs/w-card-filter-tabs.component';
import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardService } from '../services/cardservice.service';
import { CardData } from '../interface/cardResponsive.interface';
import { WTotalBalanceComponent } from '@/SHARED/Widgets/w-total-balance/w-total-balance.component';
import { CurrencyGlobalState } from '@/SHARED/Widgets/w-total-balance/currency.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [
    CommonModule,
    TranslateModule,
    WIndividualCardComponent,
    CommonModule,
    WCardFilterTabsComponent,
    FormsModule,
    RouterLink,
    WTotalBalanceComponent,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export default class InicioComponent implements OnInit {
  cardDataList: CardData[] = [];
  filteredCardDataList: CardData[] = [];

  constructor(
    private cardService: CardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadCardData();
  }

  loadCardData() {
    this.cardService.getCardData().subscribe(data => {
      this.cardDataList = data;
      this.filterCards('All');
      this.cdr.detectChanges();
    });
  }

  filterCards(tab: string) {
    this.filteredCardDataList = this.cardDataList.filter(card => {
      return tab === 'All' || card.type === tab.toUpperCase();
    });
  }
}
