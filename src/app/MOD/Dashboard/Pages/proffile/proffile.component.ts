import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-proffile',
  templateUrl: './proffile.component.html',
  imports:[CommonModule, TranslateModule],
  standalone:true
})
export default class ProffileComponent {

  constructor() { }


}
