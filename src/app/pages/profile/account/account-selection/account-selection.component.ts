import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.css'
})
export class AccountSelectionComponent {

  imgBancoP = "assets/icon/bancoP.png";
  imgEnterprise = "assets/icon/enterprise.png";
  imgPerson = "assets/icon/person.png";

  constructor(private router: Router) { }
}
