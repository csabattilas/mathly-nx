import { Route } from '@angular/router';
import {
  redirectUnauthorizedTo,
  AuthPipe,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { LayoutComponent } from '@mathly-nx/layout';

const redirectUnauthorizedToLanding = (): AuthPipe =>
  redirectUnauthorizedTo(['landing']);
const redirectLoggedInToHome = (): AuthPipe => redirectLoggedInTo(['home']);

export enum MainRoutes {
  Dashboard = 'dashboard',
  Performance = 'performance',
  Exercise = 'exercise',
  New = 'new',
  Home = 'home',
}

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@mathly-nx/landing').then((m) => m.LandingComponent),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '',
    component: LayoutComponent,
    ...canActivate(redirectUnauthorizedToLanding),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@mathly-nx/home').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
