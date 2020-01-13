import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceCreatePageRoutingModule } from './place-create-routing.module';

import { PlaceCreatePage } from './place-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceCreatePageRoutingModule
  ],
  declarations: [PlaceCreatePage]
})
export class PlaceCreatePageModule {}
