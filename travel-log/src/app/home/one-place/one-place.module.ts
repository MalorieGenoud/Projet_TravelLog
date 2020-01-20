import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePlacePageRoutingModule } from './one-place-routing.module';

import { OnePlacePage } from './one-place.page';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePlacePageRoutingModule,
    LeafletModule
  ],
  declarations: [OnePlacePage]
})
export class OnePlacePageModule {}
