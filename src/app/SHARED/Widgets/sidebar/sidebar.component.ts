import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WNavLinkComponent } from '../w-nav-link/w-nav-link.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    CommonModule,
    RouterLink,
    WNavLinkComponent,
    IonicModule,
    TranslateModule,
  ],
})
export class SidebarComponent {

  isSidebarOpen = true;



  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  routerList = [
    {
      nombreRuta: 'dashboard.side.title',
      ruta: '/dashboard',
      iconFileName: 'dashboard.svg',
      iconWhiteName: 'dashboardwhite.svg',
    },
    {
      nombreRuta: 'accounts.side.title',
      ruta: 'accounts',
      iconFileName: 'accounts.svg',
      iconWhiteName: 'accountswhite.svg',

    },
    {
      nombreRuta: 'cards.side.title',
      ruta: 'cards',
      iconFileName: 'cards.svg',
      iconWhiteName: 'cardswhite.svg',

    },
    {
      nombreRuta: 'transactions.side.title',
      ruta: 'transactions',
      iconFileName: 'transactions.svg',
      iconWhiteName: 'transactionswhite.svg',

    },
    {
      nombreRuta: 'loans.side.title',
      ruta: 'loans',
      iconFileName: 'loans.svg',
      iconWhiteName: 'loanswhite.svg',

    },
    {
      nombreRuta: 'tvp.side.title',
      ruta: 'tvp',
      iconFileName: 'tvp.svg',
      iconWhiteName: 'tvpwhite.svg',

    },
  ];

}
