import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Example1Component } from './Rountings/example1/example1.component';
import { Example2Component } from './Rountings/example2/example2.component';

const appRoutes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },

  { path: '', redirectTo: '/example1', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
