import { Component, OnInit } from '@angular/core';
// TODO: import Angular's HTTP client.
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Trip } from '../../models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage implements OnInit {
  trips: Trip[] = [];

  constructor(
    private auth: AuthService,
    // TODO: inject the HTTP client.
    public http: HttpClient,
    private tripService: TripService
  ) { }

  ionViewDidLoad() {
    // TODO: make an HTTP request to retrieve the trips.
    const url = '/api/trips';
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

  addTrip() {

  }

  ngOnInit() {
    this.tripService.getTrips().subscribe(receivedTrips => {
      this.trips = receivedTrips;
    }, err => {
      console.warn('Trip non récupéré', err);
    });
  }

}
