import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardData } from '../interface/cardResponsive.interface';
import { CardService } from '../services/cardservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { SelectedCardService } from '../services/cardselected.service';
import { WCardDetailsComponent } from '@/SHARED/Widgets/w-card-details/w-card-details.component';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  imports:[CommonModule, FormsModule, WIndividualCardComponent, WCardDetailsComponent],
  standalone:true
})
export default class CardsDetailsComponent  implements OnInit {
  constructor(
    private cardService: CardService,
    private selectedCardService: SelectedCardService,
    private route: ActivatedRoute
  ) {}

  cardDataList: CardData[] = [];
  selectedCard!: CardData

  totalAmount: number = 0;
  currency$ = this.cardService.getCurrency('api/v1/currency');
  selectedCurrency: string = '';

  ngOnInit() {
    this.selectedCardService.getSelectedCard().subscribe(card => {
      this.selectedCard = card!;
    });

    this.cardService.getCardData().subscribe(data => {
      console.log('Datos de las tarjetas:', data);
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
        this.selectedCurrency = storedCurrency ? storedCurrency : currencies[0].currency;
      }
    });
  }

  onSelectChange(event: any) {
    if (event && event.target && event.target.value) {
      this.selectedCurrency = event.target.value;
      localStorage.setItem('selectedCurrency', this.selectedCurrency);
      console.log('selectedCurrency in onSelectChange:', this.selectedCurrency);
    }
  }

  formatCurrency(value: number, currencySymbol: string): string {
    const formattedValue = value.toLocaleString('en-US', {
      style: 'currency',
      currency: currencySymbol,
    });
    return formattedValue.replace(currencySymbol, currencySymbol + ' ');
  }
}
