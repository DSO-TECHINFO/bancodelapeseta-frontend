import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-loans-component',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './loans.component.html',
})
export default class LoansComponent {

}
