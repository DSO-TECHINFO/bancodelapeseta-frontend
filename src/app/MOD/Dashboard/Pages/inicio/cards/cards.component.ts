import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterLink } from '@angular/router';
import { CardService } from '../../cards/services/cardservice.service';

@Component({
  selector: 'app-cards-component',
  standalone: true,
  imports: [
    TranslateModule,
    NgxChartsModule,
    RouterLink
  ],
  templateUrl: './cards.component.html',
})
export default class CardsComponent implements OnInit {


  cardData: any[] = [];

  constructor(
    private cardService: CardService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.cardService.getCardData().subscribe({
      next: (data) => {
        // Mapear los datos para mostrar solo el número, expiración y tipo de tarjeta
        this.cardData = data.map((card: any) => {
          return {
            number: card.number,
            expiration: card.expiration,
            type: card.type
          };
        });
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Could not get card data: ', err);
      },
    });
  }

  maskCardNumber(cardNumber: string): string {
    // Mostrar solo los últimos cuatro dígitos y enmascarar los demás con asteriscos
    const lastFourDigits = cardNumber.slice(-4);
    const maskedDigits = '*'.repeat(cardNumber.length - 4);
    return maskedDigits + lastFourDigits;
  }

}
