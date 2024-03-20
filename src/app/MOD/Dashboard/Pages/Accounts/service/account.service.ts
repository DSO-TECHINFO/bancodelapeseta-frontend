import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IAccountData } from '../interface/IAccount';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
    private tokenInterceptor: TokenService
  ) {}

  urlBase: string = 'https://api.bancodelapeseta.com';

  getAccounts(uri: string): Observable<IAccountData[]> {
    const tkn = this.tokenInterceptor.getToken() || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tkn}`,
    });

    return this.http
      .get<IAccountData[]>(`${this.urlBase}/${uri}`, { headers })
      .pipe(catchError(this.handleError));
  }
  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.log('An error has occurred', error.error);
    }else{
      console.log('Backend status code', error.status, error.error)
    }
    return throwError(()=>new Error('Something failed, try again.'))
  }
}
