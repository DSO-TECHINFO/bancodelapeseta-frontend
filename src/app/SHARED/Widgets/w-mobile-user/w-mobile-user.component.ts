import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'w-mobile-user',
  templateUrl: './w-mobile-user.component.html',
  imports:[CommonModule, RouterLink],
  standalone:true
})
export class WMobileUserComponent  {

  constructor() { }

}
