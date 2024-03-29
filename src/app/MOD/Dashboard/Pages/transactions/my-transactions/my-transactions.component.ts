import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { TransferService } from '../service/transfer.service';
import { ITransactionRes } from '../interface/transferRes.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyTransactionsComponent{

  transferData = inject(TransferService);
  data$: Observable<{ [key: string]: ITransactionRes[] }> = this.transferData.getMyTransfers('api/v1/transfers');

  selectAccountNumer:string='';
  hoverSelect:boolean = false;
  constructor() {
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  
  onSelectAccount(key:string){
    this.hoverSelect = !this.hoverSelect;
    this.selectAccountNumer= key;
  }
  getSelectAccountNumber():string{
    return this.selectAccountNumer
  }
}
