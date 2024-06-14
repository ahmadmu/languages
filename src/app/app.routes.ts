import { Routes } from '@angular/router';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';

export const routes: Routes = [{
    path: '',
    redirectTo: '/static',
    pathMatch: 'full'
  }, {
    path: 'static',
    component: StaticComponent
  }, {
    path: 'dynamic',
    component: DynamicComponent
  }
];
