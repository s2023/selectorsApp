import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'selector',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ),
  },
  {
    path: '**',
    redirectTo: 'selector',
  }
];
