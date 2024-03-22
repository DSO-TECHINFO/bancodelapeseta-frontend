import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isSidebarOpen: boolean = false;

  onToggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  cerrarSidebar() {
    this.isSidebarOpen = false;
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
      nombreRuta: 'titles.dashboard',
      ruta: 'inicio',
      iconFileName: 'dashboard.svg',
      iconWhiteName: 'dashboardwhite.svg',
      iconFinalName: 'dashboardfinal.svg',
    },
    {
      nombreRuta: 'titles.accounts',
      ruta: 'accounts',
      iconFileName: 'accounts.svg',
      iconWhiteName: 'accountswhite.svg',
      iconFinalName: 'accountsfinal.svg',
    },
    {
      nombreRuta: 'titles.cards',
      ruta: 'cards',
      iconFileName: 'cards.svg',
      iconWhiteName: 'cardswhite.svg',
      iconFinalName: 'cardsfinal.svg',
    },
    {
      nombreRuta: 'titles.loans',
      ruta: 'loans',
      iconFileName: 'loans.svg',
      iconWhiteName: 'loanswhite.svg',
      iconFinalName: 'loansfinal.svg',
    },
    {
      nombreRuta: 'titles.transactions',
      ruta: 'transactions',
      iconFileName: 'transactions.svg',
      iconWhiteName: 'transactionswhite.svg',
      iconFinalName: 'transactionsfinal.svg',
    },
    {
      nombreRuta: 'titles.tpv',
      ruta: 'tvp',
      iconFileName: 'tvp.svg',
      iconWhiteName: 'tvpwhite.svg',
      iconFinalName: 'tvpfinal.svg',
    },
    {
      nombreRuta: 'titles.proffile',
      ruta: 'proffile',
    },
  ];

}
