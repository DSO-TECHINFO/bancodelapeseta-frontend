import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavigationEnd, Router, RouterOutlet} from '@angular/router';


// LAYOUT-SERVICE:
import { LayoutService } from './LAYOUT/layout.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    IonApp,
    IonRouterOutlet,
    RouterOutlet,
    //*Layout:
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {


  constructor( public layoutService: LayoutService, private router: Router,) {

  }

  onScrollTop(event: Event) {
    // this.layout.closePopLayout();
    document.querySelector('ion-app')?.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //this.layout.closePopLayout();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    });
  }

}

