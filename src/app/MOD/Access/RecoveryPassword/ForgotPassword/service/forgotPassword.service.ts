import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import IForgoPasswordReq from '../interface/iForgoPasswordReq.interface';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'https://api.bancodelapeseta.com';

  createPersonalAccount(
    dataPerson: IForgoPasswordReq,
    uri: string
  ): Observable<IForgoPasswordReq> {
    return this.http
      .post<IForgoPasswordReq>(`${this.urlBase}/${uri}`, dataPerson)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('An error has occurred', error.error);
    } else {
      console.log('Backend status code', error.status, error.error);
    }
    return throwError(() => new Error('Something failed, try again.'));
  }
}
