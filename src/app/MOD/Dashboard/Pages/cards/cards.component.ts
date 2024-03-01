import { WIndividualCardComponent } from '@/SHARED/Widgets/w-individual-card/w-individual-card.component';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone:true,
  imports:[TranslateModule,WIndividualCardComponent]
})
export default class CardsComponent   {


}
