import { CardData } from '@/MOD/Dashboard/Pages/cards/interface/cardResponsive.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'w-card-filter-tabs',
  templateUrl: './w-card-filter-tabs.component.html',
  imports:[CommonModule, TranslateModule],
  standalone:true

})
export class WCardFilterTabsComponent {

  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  activeTab: string = 'All';

  constructor() {}

  changeTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
