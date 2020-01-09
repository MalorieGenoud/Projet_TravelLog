import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripCreatePage } from './trip-create.page';

const routes: Routes = [
  {
    path: '',
    component: TripCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripCreatePageRoutingModule {}
