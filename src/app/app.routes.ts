import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { AgeCalculatorComponent } from './pages/widgets/age-calculator/age-calculator.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
    children: [
      {
        path: 'age-calculator',
        component: AgeCalculatorComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
