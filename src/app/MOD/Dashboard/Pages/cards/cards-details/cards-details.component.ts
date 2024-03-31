import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardData } from '../interface/cardResponsive.interface';
import { CardService } from '../services/cardservice.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { SelectedCardService } from '../services/cardselected.service';
import { WCardDetailsComponent } from '@/SHARED/Widgets/w-card-details/w-card-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { WTotalBalanceComponent } from '@/SHARED/Widgets/w-total-balance/w-total-balance.component';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  imports: [
    CommonModule,
    FormsModule,
    WIndividualCardComponent,
    WCardDetailsComponent,
    RouterLink,
    TranslateModule,
    WTotalBalanceComponent,
  ],
  standalone: true,
})
export default class CardsDetailsComponent implements OnInit {
  constructor(
    private cardService: CardService,
    private selectedCardService: SelectedCardService,
    private route: ActivatedRoute
  ) {}

  cardDataList: CardData[] = [];
  selectedCard!: CardData;

  totalAmount: number = 0;
  currency$ = this.cardService.getCurrency('api/v1/currency');
  selectedCurrency: string = '';

  ngOnInit() {
    this.selectedCardService.getSelectedCard().subscribe(card => {
      this.selectedCard = card!;
    });

    this.cardService.getCardData().subscribe(data => {
      this.cardDataList = data;
      this.totalAmount = this.cardDataList.reduce(
        (total, card) => total + card.amount,
        0
      );
    });

    this.route.paramMap.subscribe(params => {
      if (params !== null) {
        const id = params.get('id');
        if (id !== null) {
          const cardId = +id;
          if (!isNaN(cardId)) {
            this.cardService.getCardById(cardId).subscribe(card => {
              if (card) {
                this.selectedCardService.setSelectedCard(card);
              }
            });
          }
        }
      }
    });

    this.currency$.subscribe(currencies => {
      if (currencies.length > 0) {
        const storedCurrency = localStorage.getItem('selectedCurrency');
        this.selectedCurrency = storedCurrency
          ? storedCurrency
          : currencies[0].currency;
      }
    });
  }


}
