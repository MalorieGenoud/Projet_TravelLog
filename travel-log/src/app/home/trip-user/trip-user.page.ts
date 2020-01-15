import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'app-trip-user',
  templateUrl: './trip-user.page.html',
  styleUrls: ['./trip-user.page.scss'],
})
export class TripUserPage implements OnInit {

  trips: Trip[] = [];

  constructor(
      // TODO: Service
      private tripService: TripService
  ) { }

  ngOnInit() {
    this.tripService.getUserTrips().subscribe(receivedTrips => {
      this.trips = receivedTrips;
      console.log(receivedTrips);
    }, err => {
      console.warn('Error', err);
    });
  }

  delete(trip) {
    //Delete trip in Trip data
    this.tripService.deleteTrip(trip.id).subscribe(Response => {
      //Update list after delete is successful
      location.reload();
    });
  }

}
