import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const DASHBOARD_ROUTES:Route[] = [
    { 
        path:'', component : DashboardComponent,
        children: [
            {path:'', loadComponent:() => import('./home/home.component').then(mod => mod.HomeComponent)},
            {path:'meters', loadComponent:() => import('./meters/meters.component').then(mod => mod.MetersComponent)},
            {path:'settings', loadComponent:() => import('./settings/settings.component').then(mod => mod.SettingsComponent)},
        ]
    },
]