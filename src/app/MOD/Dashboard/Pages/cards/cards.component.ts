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

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [TranslateModule, WIndividualCardComponent, CommonModule],
})
export default class CardsComponent implements OnInit {
  cardService = inject(CardService);
  cardDataList: WritableSignal<CardData[]> = signal([]);

  constructor() {}

  ngOnInit(): void {
    const mockCards = [
      {
        id: 1,
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        Amount: 5151518.25,
        type: 'DEBIT',
      },
      {
        id: 2,
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        Amount: 515018.25,
        type: 'CREDIT',
      },
      {
        id: 3,
        number: '1234-5265-8591-2014',
        expiration: '08/26',
        Amount: 5151518.25,
        type: 'DEBIT',
      },

    ];
    this.cardDataList.set(mockCards);
  }
}

/*
  ngOnInit(): void {
    this.cardService.getUserCards().subscribe(data => {
      const cards =data.map(item =>{
        const cardData: CardData = {
          id: item.id,
          number:item.contract.card.number,
          expiration: item.contract.card.expiration,
          Amount: item.contract.card.cardType === "DEBIT"? item.contract.account.balance : item.contract.card.chargedAmount,
          type: item.contract.card.cardType

        }
        return cardData;
      })
      const mockCards = [ {
        id: 1,
        number:'1234-5265-8591-2014',
        expiration:'08/26',
        Amount: 5151518.25,
        type: 'DEBIT'
      },
      {
        id: 2,
        number:'1234-5265-8591-2014',
        expiration:'08/26',
        Amount: 515018.25,
        type: 'Credit'

      }
    ]
      this.cardDataList.set(mockCards);
      console.log(this.cardDataList)
    })
  }
  */
