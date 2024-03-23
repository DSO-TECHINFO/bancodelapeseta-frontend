import { Component } from '@angular/core';
import { TradingOptionsComponent } from './trading-options/trading-options.component';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  standalone:true,
  imports:[TradingOptionsComponent]
})
export default class TransactionsComponent {



}
