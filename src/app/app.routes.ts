import { Routes } from '@angular/router';
import AccountSelectionComponent from './account-selection/account-selection.component';
import { CommonLoginComponent } from './login/common-login.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';


export const routes: Routes = [
    { path: 'loading', title: 'Cargando...', component: LoadingComponent },
    {path:'login',title:'Banco de la Peseta',component:CommonLoginComponent},
    { path: '', redirectTo: 'loading', pathMatch: 'full' },
    {path:'',title:'Banco de la Peseta',component:CommonLoginComponent},
    {path:'personal-account',title:'Cuenta Personal',component:PersonalAccountComponent},
    {path:'account-selection',title:'Seleccion de Cuenta',component:AccountSelectionComponent},
    {path:'inicio',title:'Inicio',component:InicioComponent},
    {path:'account-verification',title:'Inicio',component:AccountVerificationComponent},
    
];