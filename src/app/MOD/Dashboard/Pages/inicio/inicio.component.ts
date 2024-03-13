import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { StartPanelService } from './servicio/start-panel.service';
import { CurrencyExchangeList } from './interface/currencyExchange.interface';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent
  ],
  templateUrl: './inicio.component.html',
})
export default class InicioComponent{

  accountsList: any[] = [];
  currencyExchangeRate: number = 1;

  @Output() currencyExchangeList = new EventEmitter<any>();

  onRateSelected(rate: number){
    this.currencyExchangeRate = rate;
    console.log("Rate en inicio component: ", rate);
  }

}
