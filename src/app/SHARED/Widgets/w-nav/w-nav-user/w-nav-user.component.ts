import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, } from '@angular/core';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'w-nav-user',
  templateUrl: './w-nav-user.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class WNavUserComponent  {

  constructor(private elRef: ElementRef, private logoutService: LogoutService) { }

  //dropdown user
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }

  }
  logout(): void {
    this.logoutService.logout();

  }

}
