import { SidebarComponent } from '@/SHARED/Widgets/sidebar/sidebar.component';
import { WNavComponent } from '@/SHARED/Widgets/w-nav/w-nav.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[RouterOutlet, SidebarComponent, WNavComponent],
  templateUrl: './dashboard.component.html',

})
export default class DashboardComponent  {



}
