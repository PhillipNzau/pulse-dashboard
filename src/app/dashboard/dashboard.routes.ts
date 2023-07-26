import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const DASHBOARD_ROUTES:Route[] = [
    { 
        path:'', component : DashboardComponent,
        children: [
            {path:'', loadComponent:() => import('./home/home.component').then(mod => mod.HomeComponent)},
            {path:'meters', loadComponent:() => import('./meters/meters.component').then(mod => mod.MetersComponent)},
            {path:'settings', loadComponent:() => import('./settings/settings.component').then(mod => mod.SettingsComponent)},
            {path:'settings/account-settings', loadComponent:() => import('./settings/components/account-settings/account-settings.component').then(mod => mod.AccountSettingsComponent)},
            {path:'settings/access-management', loadComponent:() => import('./settings/components/access-management/access-management.component').then(mod => mod.AccessManagementComponent)},
            {path:'settings/password-security', loadComponent:() => import('./settings/components/password-security/password-security.component').then(mod => mod.PasswordSecurityComponent)},
        ]
    },
]