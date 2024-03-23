import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ILoanData } from '../interface/ILoan';
import { TokenService } from '@/CORE/Auth/services/token-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private urlBase: string = 'https://api.bancodelapeseta.com';
  private mockLoans: ILoanData[] = [
    {
      id: 1,
      account: {
        balance: 10000.0,
        real_balance: 9500.0,
        currency: {
          currency: 'USD',
        },
        account_number: '123456789',
        locked: false,
      },
      amount: 5000.0,
      totalAmount: 5500.0,
      interestRate: 0.05,
      initialSubscriptionRate: 0.03,
      currentSubscriptionRate: 0.03,
      startDate: '2024-01-01T00:00:00Z',
      initialFinishDate: '2024-12-31T23:59:59Z',
      currentFinishDate: '2025-12-31T23:59:59Z',
      paidAmount: 5500.0,
      unpaidAmount: 0,
      pendingAmount: 0,
      paidSubscriptions: 12,
    },
    {
      id: 2,
      account: {
        balance: 15000.0,
        real_balance: 14000.0,
        currency: {
          currency: 'EUR',
        },
        account_number: '987654321',
        locked: false,
      },
      amount: 10000.0,
      totalAmount: 11000.0,
      interestRate: 0.06,
      initialSubscriptionRate: 0.04,
      currentSubscriptionRate: 0.04,
      startDate: '2023-06-01T00:00:00Z',
      initialFinishDate: '2024-05-31T23:59:59Z',
      currentFinishDate: '2025-05-31T23:59:59Z',
      paidAmount: 4000.0,
      unpaidAmount: 6000.0,
      pendingAmount: 6000.0,
      paidSubscriptions: 12,
    },
  ];

  constructor(
    private http: HttpClient,
    private tokenInterceptor: TokenService
  ) {}

  getLoans(uri: string): Observable<ILoanData[]> {
    const tkn = this.tokenInterceptor.getToken() ?? '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tkn}`,
    });

    return this.http
      .get<ILoanData[]>(`${this.urlBase}/${uri}`, { headers })
      .pipe(
        map(response => {
          // Check if the response is an empty array
          if (response && response.length === 0) {
            // Return the mock data instead
            console.warn('Server response is empty');
            console.warn('Showing mock data. For demo purposes only.');
            return this.mockLoans;
          }
          return response;
        }),
        catchError(error => {
          console.error('Error fetching loans, returning mock data', error);
          return of(this.mockLoans); // Fallback to mock data in case of an error
        })
      );
  }
}
