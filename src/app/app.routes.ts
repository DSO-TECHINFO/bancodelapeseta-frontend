import { Routes } from '@angular/router';
import { AuthGuard } from './CORE/Auth/guards/auth.guard';

// import { authGuard, noAuthGuard } from './CORE/Auth/auth.guard';
// canMatch: [noAuthGuard],
// canMatch: [authGuard],

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //* ACCESS    ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  { path: 'login', title: 'Login', loadComponent: () => import('./MOD/Access/Login/Login.component')},

  { path: 'register', title: 'Login', loadComponent: () => import('./MOD/Access/Register/register.component'), canActivate: [AuthGuard], data: { expectedRol: ['admin', 'user']}},
  {
    path: 'personal-account',
    title:'Personal Account',
    loadComponent:()=>import('./MOD/Access/Register/PersonalAccount/PersonalAccount.component')
  },
  {
    path: 'company-registration',
    title: 'Login Company',
    loadComponent: () =>
    import('./MOD/Access/Register/register-company-form/register-company-form.component'),
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
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
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
      {
        path: 'transactions',
        title: 'Transactions',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/transactions/transactions.component'),
      },
      {
        path: 'loans',
        title: 'Loans',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/loans/loans.component'),
      },
      {
        path: 'tvp',
        title: 'Tvp',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/tvp/tvp.component'),
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
