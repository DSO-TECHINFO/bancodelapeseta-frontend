import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedAccountNumberService {
  private accountNumber:BehaviorSubject<string> = new BehaviorSubject<string>('');

  get accountNumberShared(){
    return this.accountNumber.asObservable();
  }
  set accountNumberData(data: string) {
    this.accountNumber.next(data);
  }

  constructor() { }

}
