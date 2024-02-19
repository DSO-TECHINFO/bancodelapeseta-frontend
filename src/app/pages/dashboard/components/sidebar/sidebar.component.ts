import { Component } from '@angular/core';


export interface NavItem {
  name: string
  icon: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: `
    .logo-pequeno {
      width: 60px;
    }
  `
})
export class SidebarComponent {

  itemsNav: NavItem[] = [
    {name: 'Dashboard', icon: 'fas fa-fw fa-tachometer-alt'},
    {name: 'Cuenta', icon: 'fas fa-file-alt text-white'},
    {name: 'Tarjetas', icon: 'fas fa-file-alt text-white'},
    {name: 'Préstamos', icon: 'fas fa-file-alt text-white'},
    {name: 'TPV', icon: 'fas fa-file-alt text-white'},

  ];

}
