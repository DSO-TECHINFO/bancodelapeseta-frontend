import { Component } from '@angular/core';
import { TradingOptionsComponent } from './trading-options/trading-options.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  standalone:true,
  imports:[TradingOptionsComponent, RouterOutlet]
})
export default class TransactionsComponent {



}
