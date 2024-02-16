import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionModule } from './pages/perfil/autenticacion/autenticacion.module';
import { RegistroModule } from './pages/perfil/registro/registro.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutenticacionModule,
    RegistroModule
  ]
})
export class AppModule { }
