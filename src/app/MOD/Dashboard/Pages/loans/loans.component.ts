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
  loans$ = this.loanService.getLoans('api/v1/loans');
  ngOnInit(): void {
    this.loans$.subscribe({
      error: error => {
        console.error('Error fetching loans:', error);
        this.tk.removeToken();
        this.rt.navigateByUrl('/login');
        },
    });
  }

  constructor(private loanService: LoanService, private tk: TokenService, private rt: Router) {}
}
