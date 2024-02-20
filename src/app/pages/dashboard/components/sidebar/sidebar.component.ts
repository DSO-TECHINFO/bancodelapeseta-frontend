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
      width: 90px;
    }

    .gradiente {
      background: rgb(0,234,194);
      background: linear-gradient(160deg, rgba(0,234,194,1) 0%, rgba(98,0,248,1) 100%); 
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
