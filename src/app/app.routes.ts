import { Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component'; 
import { CommonLoginComponent } from './login/common-login.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import AccountSelectionComponent  from './account-selection/account-selection.component';

export const routes: Routes = [
    { path: 'loading', title: 'Cargando...', component: LoadingComponent },
    { path: 'login', title: 'Banco de la Peseta', component: CommonLoginComponent },
    { path: '', redirectTo: 'loading', pathMatch: 'full' },
    { path: 'personal-account', title: 'Cuenta Personal', component: PersonalAccountComponent },
    { path: 'account-selection', title: 'Seleccion de Cuenta', component: AccountSelectionComponent },
    { path:'dashboard', title:'Banco De La Peseta | Dashboard' ,loadChildren: () => import('./pages/pages.routes')}
];
