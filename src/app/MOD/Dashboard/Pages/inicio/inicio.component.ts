import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

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
export default class InicioComponent implements AfterViewInit, AfterContentChecked, OnInit {

  @ViewChild('chartContainer') chartContainer!: ElementRef;

  chartWidth!: number;
  chartHeight!: number;

  accountsList: any[] = [];
  currencyExchangeRate: number = 1;

  @Output() currencyExchangeList = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateChartSize();
  }

  ngAfterViewInit(): void {
    if (this.chartContainer) {
      const lineHighlightElements =
        this.chartContainer.nativeElement.querySelectorAll('.line-highlight');
        console.log('lineHighlightElements: ', lineHighlightElements);
        lineHighlightElements.forEach((element: HTMLElement) => {
          element.classList.add('active');
        });
    }
    this.updateChartSize();
    this.onResize("a");
  }

  onRateSelected(rate: number){
    this.currencyExchangeRate = rate;
    console.log("Rate en inicio component: ", rate);
  }

  updateChartSize(): void {
    this.chartWidth = this.chartContainer.nativeElement.offsetWidth;
    this.chartHeight  = this.chartContainer.nativeElement.offsetHeight;

    this.view = [this.chartWidth, this.chartHeight];
  }

  multi?: any[];
  view!: [any, any];

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

  onResize(event: any) {
    this.view = [this.chartContainer.nativeElement.offsetWidth, this.chartContainer.nativeElement.offsetHeight];
  }

  ngAfterContentChecked(): void {
    if (this.chartContainer) {
      this.updateChartSize();
      this.onResize(null);
    }
  }

}
