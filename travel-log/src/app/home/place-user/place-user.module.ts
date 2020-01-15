import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceUserPageRoutingModule } from './place-user-routing.module';

import { PlaceUserPage } from './place-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceUserPageRoutingModule
  ],
  declarations: [PlaceUserPage]
})
export class PlaceUserPageModule {}
