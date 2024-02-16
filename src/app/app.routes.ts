import { Routes } from '@angular/router';
import AccountSelectionComponent from './account-selection/account-selection.component';
import { CommonLoginComponent } from './common-login/common-login.component';

export const routes: Routes = [
    {path:'login',title:'Banco de la Peseta', component:CommonLoginComponent}
,
    {path:'account-selection',title:'Seleccion de Cuenta', component:AccountSelectionComponent}
];