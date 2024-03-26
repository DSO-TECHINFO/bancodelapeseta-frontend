
import { CardData } from '@/MOD/Dashboard/Pages/cards/interface/cardResponsive.interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'w-individual-card',
  templateUrl: './w-individual-card.component.html',
  imports:[CommonModule, RouterLink, TranslateModule],
  standalone: true

})
export class WIndividualCardComponent{


  @Input() card!:CardData

  constructor() { }


}
