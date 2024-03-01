import { Routes } from '@angular/router';
// import { authGuard, noAuthGuard } from './CORE/Auth/auth.guard';
// canMatch: [noAuthGuard],
// canMatch: [authGuard],
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //* ACCESS    ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./MOD/Access/Login/Login.component'),
  },
  {
    path: 'register',
    title: 'Login',
    loadComponent: () => import('./MOD/Access/Register/register.component'),
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    loadComponent: () =>
      import('./MOD/Access/ForgotPassword/forgot-password.component'),
  },
  {
    path: 'sms-verification',
    title: 'Verify your phone number',
    loadComponent: () =>
      import('./MOD/Access/SmsVerification/sms-verification.component'),
  },
  {
    path: 'email-verification',
    title: 'Verify your email',
    loadComponent: () =>
      import('./MOD/Access/EmailVerification/email-verification.component'),
  },
  {
    path: 'personal-account',
    title: 'Personal Account',
    loadComponent: () =>
      import('./MOD/Access/Register/PersonalAccount/PersonalAccount.component'),
  },

  //* DASHBOARDS ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./MOD/Dashboard/dashboard.component'),
    children: [
      {
        path: '',
        title: 'Inicio',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/inicio/inicio.component'),
      },
      {
        path: 'accounts',
        title: 'Accounts',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/Accounts/accounts.component'),
      },
      {
        path: 'cards',
        title: 'Cards',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/cards/cards.component'),
      },
    ],
  },
  //* RESOURCES ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  // SUPPORT=====================:

  //* COMPANY   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  // LEGAL=====================:

  //* ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:
  // { path: '**', title: 'Error 404', loadComponent: () => import('./MODULES/ERROR/page-error404/page-error404.page').then(m => m.PageError404Page) },
];
