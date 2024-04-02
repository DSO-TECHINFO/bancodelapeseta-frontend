import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoanService } from '../../loans/service/loan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loans-component',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './loans.component.html',
})
export default class LoansComponent implements OnInit {
  loans$ = this.loanService.getLoans('api/v1/loans');

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loans$.subscribe({
      next: loans => {
      },
      error: error => console.error('Error fetching loans:', error),
      complete: () => console.log('Loan fetch operation completed'),
    });
  }
}
