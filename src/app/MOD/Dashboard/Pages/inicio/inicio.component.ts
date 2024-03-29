import { AfterContentChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { LineChartComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent,
    NgxChartsModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements AfterViewInit {

  @ViewChild('chartContainer') chartContainer!: ElementRef;

  chartWidth!: number;
  chartHeight!: number;

  accountsList: any[] = [];
  currencyExchangeRate: number = 1;

  @Output() currencyExchangeList = new EventEmitter<any>();

  ngAfterViewInit(): void {
    this.updateChartSize(110, 100);
    this.onActiveClase();
  }

  onActiveClase(){
    if (this.chartContainer) {
      const lineHighlightElements =
        this.chartContainer.nativeElement.querySelectorAll('.line-highlight');
        lineHighlightElements.forEach((element: HTMLElement) => {
          element.classList.add('active');
        });
    };
  }

  onRateSelected(rate: number){
    this.currencyExchangeRate = rate;
  }

  updateChartSize(w: number, h: number): void {
    this.chartWidth = this.chartContainer.nativeElement.offsetWidth;
    this.chartHeight  = this.chartContainer.nativeElement.offsetHeight;
    this.view = [this.chartWidth + w, this.chartHeight + h];
  }

  multi?: any[];
  view: [any, any] = [700, 500];

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
    setTimeout(() => {
      this.onActiveClase();
    });
  }

  onResize(event: any) {
    this.updateChartSize(0, 100);
  }

}
