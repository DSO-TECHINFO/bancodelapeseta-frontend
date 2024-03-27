import { Routes } from '@angular/router';
import { AuthGuard } from './CORE/Auth/guards/auth.guard';
import { DashGuard } from './CORE/Auth/guards/dash.guard';
DashGuard
// import { authGuard, noAuthGuard } from './CORE/Auth/auth.guard';
// canMatch: [noAuthGuard],
// canMatch: [authGuard],

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  //* ACCESS    ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻:

  { path: 'login', title: 'Login', loadComponent: () => import('./MOD/Access/Login/Login.component'), canActivate: [AuthGuard]},
  { path: 'register', title: 'Login', loadComponent: () => import('./MOD/Access/Register/register.component')},
  { path: 'sms-verification', title: 'Verify your phone number', loadComponent: () => import('./MOD/Access/SmsVerification/sms-verification.component')},
  { path: 'email-verification', title: 'Verify your email', loadComponent: () => import('./MOD/Access/EmailVerification/email-verification.component')},
  {
    path: 'personal-account',
    title:'Personal Account',
    loadComponent:()=>import('./MOD/Access/Register/PersonalAccount/PersonalAccount.component')
  },
  {
    path: 'company-registration',
    title: 'Company sign up',
    loadComponent: () =>
    import('./MOD/Access/Register/RegisterCompany/register-company-form.component'),
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    loadComponent: () =>
      import('./MOD/Access/RecoveryPassword/ForgotPassword/forgot-password.component'),
  },
  {
    path: 'validate-codes/:interface',
    title: 'Validate Codes',
    loadComponent: () =>
      import('./MOD/Access/RecoveryPassword/ValidateCodes/validate-codes.component'),
  },
  {
    path: 'recovery-change/:interface',
    title: 'Password Change',
    loadComponent: () =>
      import('./MOD/Access/RecoveryPassword/PasswordRecoveryChange/password-recovery-change.component'),
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
    path: 'create-sign',
    title: 'Create sign',
    loadComponent: () =>
      import('./MOD/Access/CreateSign/create-sign.component'),
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
    loadComponent: () => import('./MOD/Dashboard/dashboard.component'),canActivate:[DashGuard],
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
        path: 'proffile',
        title: 'Proffile',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/proffile/proffile.component'),
      },
      {
        path: 'accounts',
        title: 'Accounts',
        loadComponent: () =>
          import('./MOD/Dashboard/Pages/Accounts/accounts.component'),
          children:[
            {
              path:'',title:'Accounts',loadComponent:()=>import('./MOD/Dashboard/Pages/Accounts/myAccounts/myAccounts.component')
            },
            {
              path:'open-account',title:'Open Account',loadComponent:()=>import('./MOD/Dashboard/Pages/Accounts/openAnAccount/openAnAccount.component')
            }
          ]
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
          children:[
            {
              path: 'transfer',title:'Transfer', loadComponent:()=>import('./MOD/Dashboard/Pages/transactions/transfer/transfer.component')
            }
          ]
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
