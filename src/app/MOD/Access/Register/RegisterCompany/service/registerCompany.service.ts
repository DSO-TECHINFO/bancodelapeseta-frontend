import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterCompanyRequest } from '../interface/registerCompanyRequest.interface';
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterCompanyService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'https://api.bancodelapeseta.com';
  // urlBase: string = 'http://localhost:8080';

  signup(data: RegisterCompanyRequest, uri: string): Observable<number> {
    return this.http
      .post<number>(`${this.urlBase}/${uri}`, data, {
        observe: 'response',
      })
      .pipe(
        map(response => response.status),
        catchError(this.handleError)
      );
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
