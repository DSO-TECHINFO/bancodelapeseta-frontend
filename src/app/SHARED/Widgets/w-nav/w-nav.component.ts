import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'w-nav',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonicModule],
  templateUrl: './w-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WNavComponent {
  selectedLanguageIcon: string = 'spainflag.svg';

  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  onLanguageChange(lang: string | null): void {
    this.selectedLanguageIcon = lang === 'es' ? 'spainflag.svg' : 'usaflag.svg';
    this.translate.use(lang ?? 'en');
  }
  getIconForLanguage(lang: string): string {
    return lang === 'es' ? 'spainflag.svg' : 'usaflag.svg';
  }
  
  namePage = input<string>();

}
