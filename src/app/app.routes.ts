import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NotAvailableComponent } from './not-available.component';
import { clientFeatureGuard } from './guards/client-feature.gaurd';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'not-available', component: NotAvailableComponent },

  {
    path: ':clientId',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        canActivate: [clientFeatureGuard('analytics')],
      },
    ],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
