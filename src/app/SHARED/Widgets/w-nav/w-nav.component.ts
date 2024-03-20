import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { WNavUserComponent } from './w-nav-user/w-nav-user.component';
import { WNavLanguageComponent } from './w-nav-language/w-nav-language.component';
import { WNavSearchComponent } from './w-nav-search/w-nav-search.component';
import { WNavNotificationComponent } from './w-nav-notification/w-nav-notification.component';
import { Subscription, filter } from 'rxjs';
import { TitleService } from './services/title.service';
import { MenuController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { WNavLinkComponent } from './w-nav-link/w-nav-link.component';
import { WMobileUserComponent } from '../w-mobile-user/w-mobile-user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'w-nav',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    WNavUserComponent,
    WNavLanguageComponent,
    WNavSearchComponent,
    WNavNotificationComponent,
    WNavLinkComponent,
    WMobileUserComponent,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    SidebarComponent
  ],
  templateUrl: './w-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WNavComponent implements OnDestroy {

  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }


  pageTitle: string = '';
  private subscription: Subscription;

  constructor(private titleService: TitleService, private cdr: ChangeDetectorRef,private menuCtrl: MenuController, private router: Router) {
    this.subscription = this.titleService.getPageTitle().subscribe((title) => {
      this.pageTitle = title;
      this.cdr.markForCheck();
    });
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      const rutaActual = this.router.url;

      const rutaNormalizada = rutaActual.replace(/^\/|\/$/g, '');

      const partesRuta = rutaNormalizada.split('/');
      const ultimaParte = partesRuta[partesRuta.length - 1];

      const rutaSeleccionada = this.routerList.find(
        (enlace) => ultimaParte === enlace.ruta
      );

      if (rutaSeleccionada) {
        this.titleService.setPageTitle(rutaSeleccionada.nombreRuta);
      }
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  enviarTitulo(nombreRuta: string) {
    const rutaSeleccionada = this.routerList.find(
      (enlace) => enlace.nombreRuta === nombreRuta
    );
    if (rutaSeleccionada) {
      this.titleService.setPageTitle(rutaSeleccionada.nombreRuta);
    }
  }
  routerList = [
    {
      nombreRuta: 'dashboard.side.title',
      ruta: 'inicio',
      iconFileName: 'dashboard.svg',
      iconWhiteName: 'dashboardwhite.svg',
      iconFinalName: 'dashboardfinal.svg',
    },
    {
      nombreRuta: 'accounts.side.title',
      ruta: 'accounts',
      iconFileName: 'accounts.svg',
      iconWhiteName: 'accountswhite.svg',
      iconFinalName: 'accountsfinal.svg',
    },
    {
      nombreRuta: 'cards.side.title',
      ruta: 'cards',
      iconFileName: 'cards.svg',
      iconWhiteName: 'cardswhite.svg',
      iconFinalName: 'cardsfinal.svg',
    },
    {
      nombreRuta: 'transactions.side.title',
      ruta: 'transactions',
      iconFileName: 'transactions.svg',
      iconWhiteName: 'transactionswhite.svg',
      iconFinalName: 'transactionsfinal.svg',
    },
    {
      nombreRuta: 'loans.side.title',
      ruta: 'loans',
      iconFileName: 'loans.svg',
      iconWhiteName: 'loanswhite.svg',
      iconFinalName: 'loansfinal.svg',
    },
    {
      nombreRuta: 'tvp.side.title',
      ruta: 'tvp',
      iconFileName: 'tvp.svg',
      iconWhiteName: 'tvpwhite.svg',
      iconFinalName: 'tvpfinal.svg',
    },
  ];
}
