import { CardData } from '@/MOD/Dashboard/Interfaces/cardResponse.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'w-individual-card',
  templateUrl: './w-individual-card.component.html',
  styleUrl: './w-individual-card.component.css',
  standalone: true

})
export class WIndividualCardComponent{


  @Input() card!:CardData

  constructor() { }


}