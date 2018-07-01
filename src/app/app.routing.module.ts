import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherContainer } from './weather/weather.container';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherContainer
  },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
