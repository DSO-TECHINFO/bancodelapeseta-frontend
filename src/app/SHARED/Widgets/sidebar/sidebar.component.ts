import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { WNavLinkComponent } from '../w-nav/w-nav-link/w-nav-link.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TitleService } from '../w-nav/services/title.service';
import { filter } from 'rxjs';

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
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private titleService: TitleService, private router: Router) {
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
