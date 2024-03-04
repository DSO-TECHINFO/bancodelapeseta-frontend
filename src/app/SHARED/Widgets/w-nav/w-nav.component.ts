import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { WNavUserComponent } from './w-nav-user/w-nav-user.component';
import { WNavLanguageComponent } from './w-nav-language/w-nav-language.component';
import { WNavSearchComponent } from './w-nav-search/w-nav-search.component';
import { WNavNotificationComponent } from './w-nav-notification/w-nav-notification.component';
import { Subscription } from 'rxjs';
import { TitleService } from './services/title.service';

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
  ],
  templateUrl: './w-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WNavComponent implements OnDestroy, OnInit {
  pageTitle: string = '';
  private subscription: Subscription;

  constructor(private titleService: TitleService, private cdr: ChangeDetectorRef) {
    this.subscription = this.titleService.getPageTitle().subscribe((title) => {
      this.pageTitle = title;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.titleService.getPageTitle().subscribe((title) => {
      this.pageTitle = title;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
