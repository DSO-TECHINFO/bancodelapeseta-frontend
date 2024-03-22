
import { CardData } from '@/MOD/Dashboard/Pages/cards/interface/cardResponsive.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'w-individual-card',
  templateUrl: './w-individual-card.component.html',

  standalone: true

})
export class WIndividualCardComponent{


  @Input() card!:CardData

  constructor() { }


}
