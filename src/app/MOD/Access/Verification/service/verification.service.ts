import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { CodeDto } from "../../SmsVerification/dto/codeDto";
import { UnsignedVerificationRequest } from "../../CreateSign/interface/UnsignedVerificationRequest";
import { CreateSign } from "../../CreateSign/interface/CreateSign.interface";
import  IForgoPasswordReq  from "../../RecoveryPassword/ForgotPassword/interface/iForgoPasswordReq.interface";
import passwordRecoveryVerificationCodes from "../../RecoveryPassword/ForgotPassword/interface/passwordRecoveryVerificationCodes.interface";
import newPassword from "../../RecoveryPassword/ForgotPassword/interface/newPassword.interface";

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

  public sendEmailAndPhoneCodePasswordRecovery(body: IForgoPasswordReq, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, body)
    .pipe(catchError(this.handleError));
  }

  public verifyEmailAndPhoneCodePasswordRecovery(body: passwordRecoveryVerificationCodes, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, body)
    .pipe(catchError(this.handleError));
  }

  public changePassword(body: newPassword, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, body)
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

  public verificationUnsignedCode(body: UnsignedVerificationRequest, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, body)
    .pipe(catchError(this.handleError));
  }

  public createSign(body: CreateSign, uri: string): Observable<any>{
    return this.http
    .post<any>(`${this.urlBase}/${uri}`, body)

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
