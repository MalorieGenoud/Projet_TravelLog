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
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'trip-create',
        loadChildren: () => import('./trip-create/trip-create.module').then( m => m.TripCreatePageModule)
      },
      {
        path: 'place-create',
        loadChildren: () => import('./place-create/place-create.module').then( m => m.PlaceCreatePageModule)
      },
      {
        path: 'trip-user',
        loadChildren: () => import('./trip-user/trip-user.module').then( m => m.TripUserPageModule)
      },
      {
        path: 'places-trip/:tripId',
        loadChildren: () => import('./places-trip/places-trip.module').then( m => m.PlacesTripPageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
      },
    ]
  },  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
