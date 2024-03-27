import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardData } from '../interface/cardResponsive.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedCardService {
  private selectedCardSource = new BehaviorSubject<CardData | null>(null);
  selectedCard$ = this.selectedCardSource.asObservable();

  constructor() { }

  setSelectedCard(card: CardData) {
    this.selectedCardSource.next(card);
  }

  getSelectedCard(): Observable<CardData | null> {
    return this.selectedCard$;
  }
}
