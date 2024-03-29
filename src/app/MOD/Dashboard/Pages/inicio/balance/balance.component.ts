import {  Component} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-balance-component',
  standalone: true,
  imports: [TranslateModule, FormsModule, AsyncPipe, NgxChartsModule, RouterLink],
  templateUrl: './balance.component.html',
})
export default class BalanceComponent {

  multi?: any[];
  view: [any, any] = [500, 256];
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
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
    //
  }

}
