import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'w-nav-notification',
  templateUrl: './w-nav-notification.component.html',
  standalone:true,
  imports:[CommonModule, IonicModule]
})
export class WNavNotificationComponent  {


  constructor(private elRef: ElementRef) { }

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
}
