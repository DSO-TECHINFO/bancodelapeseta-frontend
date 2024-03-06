import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private pageTitleSource = new BehaviorSubject<string>('');
  pageTitle = this.pageTitleSource.asObservable();

  setPageTitle(title: string) {
    this.pageTitleSource.next(title);
  }

  getPageTitle(): Observable<string> {
    return this.pageTitle;
  }
}
