import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive,  } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'w-nav-link',
  templateUrl: './w-nav-link.component.html',
  standalone:true,
  imports:[RouterLink, CommonModule, IonicModule, RouterLinkActive, TranslateModule]
})

export class WNavLinkComponent {

@Input() routerLink: string[] = [];
@Input() nombreRuta: string = '';
@Input() iconFileName: string = '';
@Input() iconWhiteName: string = '';
@Input() routerLinkActive: RouterLinkActive | undefined;
@Input() isSidebarOpen: boolean | undefined;


get isLinkActive(): boolean {
  return this.routerLinkActive?.isActive ?? false;
}

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
  this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}