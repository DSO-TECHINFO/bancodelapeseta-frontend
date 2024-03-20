import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { multi } from './data';
import { StartPanelService } from './servicio/start-panel.service';
import { CurrencyExchangeList } from './interface/currencyExchange.interface';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent,
    NgxChartsModule,
    BrowserAnimationsModule
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

  multi?: any[];
  view: any = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
