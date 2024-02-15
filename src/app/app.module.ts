import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionModule } from './clientes/autenticacion/autenticacion.module';
import { RegistroModule } from './clientes/registro/registro.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutenticacionModule,
    RegistroModule
  ]
})
export class AppModule { }
