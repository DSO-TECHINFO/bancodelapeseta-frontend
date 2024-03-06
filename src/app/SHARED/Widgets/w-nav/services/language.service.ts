import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private storageKey = 'userLanguage';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    const storedLanguage = localStorage.getItem(this.storageKey);
    const browserLang = translate.getBrowserLang() || 'es';
    const initialLanguage = storedLanguage || browserLang;

    this.setLanguage(initialLanguage);
  }

  setLanguage(lang: string): void {
    localStorage.setItem(this.storageKey, lang);
    this.translate.use(lang);
  }
}
