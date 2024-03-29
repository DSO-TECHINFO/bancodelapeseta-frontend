import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ISignedReq } from '../interface/signedReq.interface';
import { ISignedRes } from '../interface/signedRes.interface';
import { catchError, throwError } from 'rxjs';
import { ITransaction } from '../interface/transfer.interface';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { ITransactionRes } from '../interface/transferRes.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  urlBase: string = 'https://api.bancodelapeseta.com';
  
  constructor(private httpc:HttpClient, private tokenInterceptor: TokenService) { }

  postVerificationCode(uri:string, obj:ISignedReq){
    return this.httpc
      .post<ISignedRes>(`${this.urlBase}/${uri}`, obj)
      .pipe(catchError(this.handleError))
  }
  
  postTransfer(uri:string,obj:ITransaction){
    return this.httpc
      .post(`${this.urlBase}/${uri}`,obj)
      .pipe(catchError(this.handleError))
  }

  getMyTransfers(uri:string){
    const tkn = this.tokenInterceptor.getToken() || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tkn}`,
    });
    return this.httpc
      .get<{[key:string]:ITransactionRes[]}>(`${this.urlBase}/${uri}`,{headers})
      .pipe(catchError(this.handleError))
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
