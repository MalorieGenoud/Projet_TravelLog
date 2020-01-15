import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesTripPage } from './places-trip.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesTripPageRoutingModule {}
