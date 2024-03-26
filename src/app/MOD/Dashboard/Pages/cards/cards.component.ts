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
import { WCardFilterTabsComponent } from '@/SHARED/Widgets/w-card-filter-tabs/w-card-filter-tabs.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    RouterOutlet
  ],
})
export default class CardsComponent {



}
