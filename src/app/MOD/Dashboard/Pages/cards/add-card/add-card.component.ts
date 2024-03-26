import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  imports:[CommonModule, TranslateModule,RouterLink],
  standalone:true

})
export default class AddCardComponent   {



}
