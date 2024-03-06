import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractResponse } from '../../../Interfaces/cardResponse.interface'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  constructor(private http:HttpClient) { }

  getUserCards(){
    return this.http.get<ContractResponse[]>('http://localhost:8080/api/v1/card');
  }

}

