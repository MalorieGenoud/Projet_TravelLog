import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceCreatePage } from './place-create.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceCreatePageRoutingModule {}
