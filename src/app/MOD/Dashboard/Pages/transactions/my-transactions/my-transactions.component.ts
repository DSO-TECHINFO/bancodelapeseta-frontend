import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { TransferService } from '../service/transfer.service';
import { ITransactionRes } from '../interface/transferRes.interface';
import { Observable } from 'rxjs';
import { SharedAccountNumberService } from '../service/sharedAccountNumber.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-my-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyTransactionsComponent implements OnInit {
  transferData = inject(TransferService);
  data$: Observable<{ [key: string]: ITransactionRes[] }> =
    this.transferData.getMyTransfers('api/v1/transfers');

  selectAccountNumer: string = '';
  hoverSelect: boolean = false;

  constructor(
    private sharedNumberAccount: SharedAccountNumberService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.sharedNumberAccount.accountNumberShared.subscribe({
      next: value => {
        this.selectAccountNumer = value;
        this.cdr.detectChanges();
      },
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
