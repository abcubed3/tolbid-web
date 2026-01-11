import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing';
import { RcsSolutionsComponent } from './rcs-solutions/rcs-solutions';


export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'rcs-solutions', component: RcsSolutionsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];
