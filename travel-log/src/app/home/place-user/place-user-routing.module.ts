import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceUserPage } from './place-user.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceUserPageRoutingModule {}
