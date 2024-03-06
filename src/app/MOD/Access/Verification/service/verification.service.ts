import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { CodeDto } from "../../SmsVerification/dto/codeDto";

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'https://api.bancodelapeseta.com';
  // urlBase: string = 'http://localhost:8080';

  public sendEmailVerificationCode(uri: string): Observable<any>{
    return this.http
    .get<any>(`${this.urlBase}/${uri}`)
    .pipe(catchError(this.handleError));
  }

  public sendPhoneVerificationCode(uri: string): Observable<any>{
    return this.http
    .get<any>(`${this.urlBase}/${uri}`)
    .pipe(catchError(this.handleError));
  }

  public verifyEmailCode(code: CodeDto, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, code)
    .pipe(catchError(this.handleError));
  }

  public verifyPhoneCode(code: CodeDto, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, code)
    .pipe(catchError(this.handleError));
  }

  public verificationUnsignedCode(uri: string): Observable<any>{
    return this.http
    .get<any>(`${this.urlBase}/${uri}`)
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
