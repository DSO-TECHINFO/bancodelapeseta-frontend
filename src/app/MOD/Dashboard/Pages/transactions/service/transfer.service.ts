import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITransferPart } from '../interface/transferPart.interface';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferPartData:BehaviorSubject<ITransferPart> = new BehaviorSubject<ITransferPart>({beneficiaryName:'',destinationAccount:0});

  get partDataObservable(){
    return this.transferPartData.asObservable();
  }

  set partDataObservableTransfer(data:ITransferPart){
    this.transferPartData.next(data);
  }

  constructor() {}
}
