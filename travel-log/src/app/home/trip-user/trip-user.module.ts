import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripUserPageRoutingModule } from './trip-user-routing.module';

import { TripUserPage } from './trip-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripUserPageRoutingModule
  ],
  declarations: [TripUserPage]
})
export class TripUserPageModule {}
