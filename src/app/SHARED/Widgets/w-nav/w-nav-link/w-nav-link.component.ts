import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive,  } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'w-nav-link',
  templateUrl: './w-nav-link.component.html',
  standalone:true,
  imports:[RouterLink, CommonModule, IonicModule, RouterLinkActive, TranslateModule]
})

export class WNavLinkComponent {

@Input() routerLink: string[] = [];
@Input() nombreRuta: string = '';
@Input() iconFileName: string = '';
@Input() iconWhiteName: string = '';
@Input() routerLinkActive: RouterLinkActive | undefined;
@Input() isSidebarOpen: boolean | undefined;
@Input() title: string = '';

get isLinkActive(): boolean {
  return this.routerLinkActive?.isActive ?? false;
}



}
