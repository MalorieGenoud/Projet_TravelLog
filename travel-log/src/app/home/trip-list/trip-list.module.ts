import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TripListPageRoutingModule } from './trip-list-routing.module';
import { TripListPage } from './trip-list.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TripListPage]
})
export class TripListPageModule {}
