import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StartPanelService {
  constructor(private http: HttpClient) {}

  urlBase: string = 'https://api.bancodelapeseta.com';
  // urlBase: string = 'http://localhost:8080';

  public getAccounts(uri: string): Observable<any>{
    const jsonUrl = "assets/accounts.json";
    return this.http.get<any>(jsonUrl);
    // return this.http
    // .get<any>(`${this.urlBase}/${uri}`)
    // .pipe(catchError(this.handleError));
  }

  public getCurrency(uri: string): Observable<any>{;
    return this.http.get<any>(uri);
    // return this.http
    // .get<any>(`${this.urlBase}/${uri}`)
    // .pipe(catchError(this.handleError));
  }

  public getCurrencyExchange(uri: string): Observable<any>{
    return this.http.get<any>(uri);
    // return this.http
    // .get<any>(`${this.urlBase}/${uri}`)
    // .pipe(catchError(this.handleError));
  }

  public getTpv(uri: string): Observable<any>{
    return this.http.get<any>(uri);
    // return this.http
    // .get<any>(`${this.urlBase}/${uri}`)
    // .pipe(catchError(this.handleError));
  }

  public getCards(uri: string): Observable<any>{
    return this.http.get<any>(uri);
    // return this.http
    // .get<any>(`${this.urlBase}/${uri}`)
    // .pipe(catchError(this.handleError));
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
