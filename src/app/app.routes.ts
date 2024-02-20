import { Routes } from '@angular/router';
import { AccountLoginComponent } from './pages/profile/account/account-login/account-login.component';
import { AccountSelectionComponent } from './pages/profile/account/account-selection/account-selection.component';
import { AccountVerificationComponent } from './pages/profile/account/account-verification/account-verification.component';
import { RegisterIndividualComponent } from './pages/profile/register/register-individual/register-individual.component';
import { RegisterCompanyComponent } from './pages/profile/register/register-company/register-company.component';

export const routes: Routes = [
    { path: '', title: 'Banco de la Peseta', component: AccountLoginComponent },
    { path: 'account-login', title: 'Banco de la Peseta', component: AccountLoginComponent },
    { path: 'account-selection', title: 'Seleccion de Cuenta', component: AccountSelectionComponent },
    { path: 'account-verification', title: 'Verificar cuenta', component: AccountVerificationComponent },
    { path: 'register-company', title: 'Registro cuenta de empresa', component: RegisterCompanyComponent },
    { path: 'register-individual', title: 'Registro cuenta personal', component: RegisterIndividualComponent }
];