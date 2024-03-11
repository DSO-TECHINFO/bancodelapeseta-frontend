import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonalAccountRes } from '../interface/personalAccountRes.interface';
import IPersonlAccountReq from '../interface/personalAccountReq.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalAccountService {

  constructor(private http: HttpClient) { }
  urlBase: string = 'https://api.bancodelapeseta.com';
  //urlBase: string = 'http://localhost:8080';
  
  createPersonalAccount(dataPerson:IPersonlAccountReq ,uri:string): Observable<IPersonalAccountRes> {
    return this.http.post<IPersonalAccountRes>(`${this.urlBase}/${uri}`, dataPerson).pipe(catchError(this.handleError));
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
