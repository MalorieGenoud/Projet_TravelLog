import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripCreatePageRoutingModule } from './trip-create-routing.module';

import { TripCreatePage } from './trip-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripCreatePageRoutingModule
  ],
  declarations: [TripCreatePage]
})
export class TripCreatePageModule {}
