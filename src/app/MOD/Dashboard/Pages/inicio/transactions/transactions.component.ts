import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ITransactionRes } from '../../transactions/interface/transferRes.interface';
import { SharedAccountNumberService } from '../../transactions/service/sharedAccountNumber.service';
import { map, Observable } from 'rxjs';
import { TransferService } from '../../transactions/service/transfer.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-transactions-component',
  standalone: true,
  imports: [TranslateModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './transactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransactionsComponent implements OnInit {

  transferData = inject(TransferService);
  data$: Observable<{ [key: string]: ITransactionRes[] }> = this.transferData.getMyTransfers('api/v1/transfers').pipe(
    map(data => {
      const sortedData: { [key: string]: ITransactionRes[] } = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          sortedData[key] = data[key]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);
        }
      }
      return sortedData;
    })
  );

  selectAccountNumer: string = '';

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
