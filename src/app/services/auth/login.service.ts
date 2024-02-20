import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginResponse } from './loginResponse';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  urlBase:string=environment.api_host;

  login(credentials:LoginRequest, uri:string):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.urlBase}/${uri}`, credentials).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.log('Se ha producido un error', error.error);
    }else{
      console.log('Código de estado del backend', error.status, error.error)
    }
    return throwError(()=>new Error('Algo falló, intente nuevamente.'))
  }
}