import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';

@Component({
  selector: 'cards-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cards.component.html',
})
export default class CardsComponent implements OnInit {

  data: any = {};

  @Input() rate: number = 1;

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.startPanelService.getCards('assets/cards.json')
    .subscribe({
      next: (res) => {
        this.data = res[0].contract;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Could not get cards: ', err);
      },
    })

    throw new Error('Method not implemented.');
  }

}