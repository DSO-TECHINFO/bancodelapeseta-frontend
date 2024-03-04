import { SidebarComponent } from '@/SHARED/Widgets/sidebar/sidebar.component';
import { WNavComponent } from '@/SHARED/Widgets/w-nav/w-nav.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { Router } from '@angular/router';
import { Auth } from '@/CORE/Auth/Auth.function';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, WNavComponent],
  templateUrl: './dashboard.component.html',
})

export default class DashboardComponent implements OnInit {
  name: string = document.location.pathname;
  public namePage = this.name;

  constructor(private route: Router, private token: TokenService) {}

  ngOnInit(): void {
    // if(this.token.getToken()){
    //     this.route.navigate(['/login'])
    // }
    return
  }
}
