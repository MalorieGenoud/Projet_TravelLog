import { Component, OnInit } from '@angular/core';
// TODO: import Angular's HTTP client.
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';

// TODO: import the environment config.
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage implements OnInit {

  constructor(
      private auth: AuthService,
      // TODO: inject the HTTP client.
      public http: HttpClient
  ) { }

  ionViewDidLoad() {
    // TODO: make an HTTP request to retrieve the trips.
    const url = 'https://comem-travel-log-api.herokuapp.com/api/trips';
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

  ngOnInit() {
    const url = `${environment.apiUrl}/trips`;
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

}
