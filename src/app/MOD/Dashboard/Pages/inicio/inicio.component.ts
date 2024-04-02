import { AfterContentChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './transactions/transactions.component';
import LoansComponent from './loans/loans.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { CardService } from '../cards/services/cardservice.service';
import { Router } from '@angular/router';
import { CardData } from '../cards/interface/cardResponsive.interface';
import { FormsModule } from '@angular/forms';
import { WTotalBalanceComponent } from '@/SHARED/Widgets/w-total-balance/w-total-balance.component';
import TransactionsComponent from './transactions/transactions.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent,
    NgxChartsModule,
    FormsModule,
    WTotalBalanceComponent,
    TransactionsComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent{
  constructor(private cardService: CardService, private router: Router) {}
  @Output() currencyExchangeList = new EventEmitter<any>();

  accountsList: any[] = [];
  currencyExchangeRate: number = 1;
  onRateSelected(rate: number){
    this.currencyExchangeRate = rate;
  }


}
