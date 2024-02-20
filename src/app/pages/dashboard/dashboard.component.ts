import { Component, Output } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalLogoutComponent } from './components/modal-logout/modal-logout.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ModalLogoutComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

  name: string = 'La Peseta Admin'

}
