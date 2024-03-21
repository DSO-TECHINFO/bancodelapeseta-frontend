import { Component } from '@angular/core';
import { LoanService } from './service/loan.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule],
})
export default class LoansComponent {
  loans$ = this.loanService.getLoans('api/v1/loans');

  constructor(private loanService: LoanService) {}
}
