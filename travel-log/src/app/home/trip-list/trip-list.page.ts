import { Component, OnInit } from '@angular/core';
// TODO: import Angular's HTTP client.
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Trip } from '../../models/trip';
import { TripService } from '../../trip/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from 'src/app/cache.service';

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
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private cache: CacheService<Trip>
  ) {
    this.trip = new Trip();
  }
  
  addTrip() {

  }

  ionViewDidEnter() {
    console.log('ion view did load');
    this.tripService.getTrips().subscribe(receivedTrips => {
      this.trips = receivedTrips;
    }, err => {
      console.warn('Trip non récupéré', err);
    });
  }



}
