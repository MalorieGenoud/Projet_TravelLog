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
export class TripListPage {
  trips: Trip[] = [];
  trip: Trip;

  constructor(
    private auth: AuthService,
    // TODO: inject the HTTP client.
    public http: HttpClient,
    private tripService: TripService,
  ) {
    this.trip = new Trip();
  }


  ngOnInit() {
    this.tripService.getTrips().subscribe(receivedTrips => {
      this.trips = receivedTrips;
    }, err => {
      console.warn('Trip non récupéré', err);
    });
  }

  filter(data){
    this.tripService.filterTrips(data.detail.value).subscribe(response =>{
      this.trips = response;
    })
  }
}