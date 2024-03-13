import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { LoginRequest } from '../interface/loginRequest.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginResponse } from '../interface/loginResponse.interface';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'https://api.bancodelapeseta.com';
  // urlBase: string = 'http://localhost:8080';

  login(credentials: LoginRequest, uri: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.urlBase}/${uri}`, credentials)
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
