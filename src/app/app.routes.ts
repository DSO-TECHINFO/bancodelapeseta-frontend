import { Routes } from '@angular/router';
// import { authGuard, noAuthGuard } from './CORE/Auth/auth.guard';
// canMatch: [noAuthGuard],
// canMatch: [authGuard],
export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full', },
  //* ACCESS    ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:
  { 
    path: 'login', 
    title: 'Login', 
    loadComponent: () => import('./MOD/Access/Login/Login.component')},
  {
    path: 'register',
    loadComponent: () => import('./MOD/Access/Register/register.component'),
  },
  {
    path: 'personal-account', 
    title:'Personal Account', 
    loadComponent:()=>import('./MOD/Access/Register/PersonalAccount/PersonalAccount.component')
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full', },
  //* DASHBOARDS ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  //* RESOURCES ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  // SUPPORT=====================:

  //* COMPANY   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  // LEGAL=====================:

  //* ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:
  // { path: '**', title: 'Error 404', loadComponent: () => import('./MODULES/ERROR/page-error404/page-error404.page').then(m => m.PageError404Page) },



];
