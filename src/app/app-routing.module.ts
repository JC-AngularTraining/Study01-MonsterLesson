import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Example1Component } from './Routings/example1/example1.component';
import { Example2Component } from './Routings/example2/example2.component';
import { Example3Component } from './Routings/example3/example3.component';
import { HomePageComponent } from './Routings/home-page/home-page.component';
import { Table1Component } from './Routings/table1/table1.component';
import { Table2Component } from './Routings/table2/table2.component';
import { PageNotFoundComponent } from './_page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: 'table1', component: Table1Component },
  { path: 'table2', component: Table2Component },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
