import { CardData } from '@/MOD/Dashboard/Pages/cards/interface/cardResponsive.interface';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'w-card-details',
  templateUrl: './w-card-details.component.html',
  imports:[CommonModule],
  standalone:true

})
export class WCardDetailsComponent  {



  @Input() card!:CardData

  constructor() { }


}
