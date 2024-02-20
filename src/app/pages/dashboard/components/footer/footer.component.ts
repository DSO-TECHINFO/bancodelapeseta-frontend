import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  fechaActual: Date = new Date();
  anio: number = this.fechaActual.getFullYear();

}
