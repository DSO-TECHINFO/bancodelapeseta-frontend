import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cards-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cards.component.html',
})
export default class CardsComponent implements OnInit {

  @Input() accountsList: any[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
