import { Component, OnInit } from '@angular/core';
import { LoanService } from './service/loan.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule],
})
export default class LoansComponent implements OnInit {
  loans$ = this.loanService.getLoans('api/v1/loans'); // This returns Observable<ILoanData[]>
  ngOnInit(): void {
    this.loans$.subscribe({
      next: loans => {
        console.log('loans fetched');
        console.log(loans);
      },
      error: error => {
        console.error('Error fetching loans:', error);
        this.tk.removeToken();
        this.rt.navigateByUrl('/login');
        },
      complete: () => console.log('Loan fetch operation completed'),
    });
  }

  constructor(private loanService: LoanService, private tk: TokenService, private rt: Router) {}
}
