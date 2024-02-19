import { Routes } from '@angular/router';
import AccountSelectionComponent from './account-selection/account-selection.component';
import { CommonLoginComponent } from './common-login/common-login.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path:'login',title:'Banco de la Peseta',component:CommonLoginComponent},
    {path:'',title:'Banco de la Peseta',component:CommonLoginComponent},
    {path:'personal-account',title:'Cuenta Personal',component:PersonalAccountComponent},
    {path:'account-selection',title:'Seleccion de Cuenta',component:AccountSelectionComponent},
    {path:'inicio',title:'Inicio',component:InicioComponent},
];