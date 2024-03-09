import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import BalanceComponent from './balance/balance.component';
import CardsComponent from './cards/cards.component';
import TpvComponent from './tpv/tpv.component';
import LoansComponent from './loans/loans.component';
import { StartPanelService } from './servicio/start-panel.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TranslateModule,
    BalanceComponent,
    CardsComponent,
    LoansComponent,
    TpvComponent
  ],
  templateUrl: './inicio.component.html',
})
export default class InicioComponent implements OnInit{

  accountsList: any[] = [];

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.startPanelService.getAccounts('api/v1/accounts').subscribe({
      next: (userData) => {
        this.accountsList = userData;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('No se pudo enviar el código de verificación por correo. El error es: ', err);
      },
    })

    throw new Error('Method not implemented.');
  }

}
