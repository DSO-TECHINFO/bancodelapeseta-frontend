import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { Component, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContractResponse , CardData} from '@/MOD/Dashboard/Interfaces/cardResponse.interface'; 
import { CardService } from '@/MOD/Dashboard/Pages/cards/service/cardservice.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone:true,
  imports:[TranslateModule,WIndividualCardComponent]
})
export default class CardsComponent implements OnInit {

  cardService = inject(CardService);
  cardDataList: WritableSignal<CardData[]> = signal([]);

  constructor(){}

  /*
  ngOnInit(): void {
    this.cardService.getUserCards().subscribe(data => {
      const cards =data.map(item =>{
        const cardData: CardData = {
          id: item.id,
          number:item.contract.card.number,
          expiration: item.contract.card.expiration,
          Amount: item.contract.card.cardType === "DEBIT"? item.contract.account.balance : item.contract.card.chargedAmount 
          
        }
        return cardData; 
      })
      const mockCards = [ {
        id: 1,
        number:'1234-5265-8591-2014',
        expiration:'08/26',
        Amount: 5151518.25
      },
      {
        id: 2,
        number:'1234-5265-8591-2014',
        expiration:'08/26',
        Amount: 515018.25
        
      }
    ]
      this.cardDataList.set(mockCards);
      console.log(this.cardDataList)
    })
  }
  */
 ngOnInit(): void {
  const mockCards = [ {
    id: 1,
    number:'1234-5265-8591-2014',
    expiration:'08/26',
    Amount: 5151518.25
  },
  {
    id: 2,
    number:'1234-5265-8591-2014',
    expiration:'08/26',
    Amount: 515018.25
    
  }
]
  this.cardDataList.set(mockCards);
  console.log(this.cardDataList());
  
}
  

}
