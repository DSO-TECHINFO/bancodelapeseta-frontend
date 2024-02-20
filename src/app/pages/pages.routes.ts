import { Routes } from "@angular/router";

export default [
    { path: '', loadComponent: () => import('./dashboard/dashboard.component') }
] as Routes;