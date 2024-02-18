import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.css'
})
export default class AccountSelectionComponent {
  constructor(private router: Router) {}
  
}
