import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePlacePage } from './one-place.page';

const routes: Routes = [
  {
    path: '',
    component: OnePlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePlacePageRoutingModule {}
