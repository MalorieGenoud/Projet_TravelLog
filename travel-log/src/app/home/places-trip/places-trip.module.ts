import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesTripPageRoutingModule } from './places-trip-routing.module';

import { PlacesTripPage } from './places-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesTripPageRoutingModule
  ],
  declarations: [PlacesTripPage]
})
export class PlacesTripPageModule {}
