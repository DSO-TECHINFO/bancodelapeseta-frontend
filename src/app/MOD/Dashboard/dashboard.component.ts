import { SidebarComponent } from '@/SHARED/Widgets/sidebar/sidebar.component';
import { WNavComponent } from '@/SHARED/Widgets/w-nav/w-nav.component';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { Router } from '@angular/router';
import { Auth } from '@/CORE/Auth/Auth.function';
import { Subscription } from 'rxjs';
import { TitleService } from '@/SHARED/Widgets/w-nav/services/title.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, WNavComponent, TranslateModule],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent implements OnInit {
  name: string = document.location.pathname;
  public namePage = this.name;

  pageTitle: string = '';
  private subscription: Subscription;

  constructor(
    private titleService: TitleService,
    private cdr: ChangeDetectorRef,
    private route: Router,
    private token: TokenService
  ) {
    this.subscription = this.titleService.getPageTitle().subscribe((title) => {
      this.pageTitle = title;
      this.cdr.markForCheck();
    });
  }

  ngOnInit() {
    this.titleService.getPageTitle().subscribe((title) => {
      this.pageTitle = title;
      this.cdr.detectChanges();
    });
  }


}
