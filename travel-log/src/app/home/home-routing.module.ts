import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'place-list',
        loadChildren: () => import('./place-list/place-list.module').then( m => m.PlaceListPageModule)
      },
      {
        path: 'trip-list',
        loadChildren: () => import('./trip-list/trip-list.module').then( m => m.TripListPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      }
    ]
  },  {
    path: 'trip-create',
    loadChildren: () => import('./trip-create/trip-create.module').then( m => m.TripCreatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
