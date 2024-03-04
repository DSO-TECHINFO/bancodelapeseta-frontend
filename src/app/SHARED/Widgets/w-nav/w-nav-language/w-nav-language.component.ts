import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'w-nav-language',
  templateUrl: './w-nav-language.component.html',
  imports: [CommonModule, TranslateModule, IonicModule],
  standalone: true,
})
export class WNavLanguageComponent implements OnInit {
  //dropdown
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!this.elRef.nativeElement.contains(target)) {
      this.isDropdownOpen = false;
    }
  }

  //language
  selectedLanguageIcon: string = 'spainflag.svg';

  constructor(public translate: TranslateService, private elRef: ElementRef) {
    translate.addLangs(['en', 'es']);
  }

  ngOnInit(): void {
    this.setDefaultLanguage();
  }

  setDefaultLanguage(): void {
    const savedLang = localStorage.getItem('selectedLanguage');

    if (savedLang) {
      this.translate.use(savedLang);
      this.selectedLanguageIcon = this.getIconForLanguage(savedLang);
    } else {
      this.translate.setDefaultLang('es');
      const browserLang = this.translate.getBrowserLang() || 'es';
      this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
      this.selectedLanguageIcon = this.getIconForLanguage(browserLang);
    }
  }

  onLanguageChange(lang: string | null): void {
    this.selectedLanguageIcon = lang === 'es' ? 'spainflag.svg' : 'usaflag.svg';
    this.translate.use(lang ?? 'en');
    localStorage.setItem('selectedLanguage', lang ?? 'en');
  }

  getIconForLanguage(lang: string): string {
    return lang === 'es' ? 'spainflag.svg' : 'usaflag.svg';
  }
}
