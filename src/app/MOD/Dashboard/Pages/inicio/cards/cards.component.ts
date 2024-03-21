import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';
import { Subscription } from 'rxjs';
import { TitleService } from '@/SHARED/Widgets/w-nav/services/title.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'cards-component',
  standalone: true,
  imports: [
    TranslateModule,
    NgxChartsModule
  ],
  templateUrl: './cards.component.html',
})
export default class CardsComponent implements OnInit {

  data: any = {};

  @Input() rate: number = 1;
  title:string = ''

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef,
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
