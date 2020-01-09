import { Component, OnInit } from '@angular/core';
// TODO: import Angular's HTTP client.
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.page.html',
  styleUrls: ['./place-list.page.scss'],
})
export class PlaceListPage implements OnInit {
  places: Place[] = [];

  constructor(
    private auth: AuthService,
    // TODO: inject the HTTP client.
    public http: HttpClient,
    private placeService: PlaceService
  ) { }

  ionViewDidLoad() {
    // TODO: make an HTTP request to retrieve the places.
    const url = '/api/places';
    this.http.get(url).subscribe(places => {
      console.log(`Places loaded`, places);
    });
  }

  addPlace() {

  }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(receivedPlaces => {
      this.places = receivedPlaces;
    }, err => {
      console.warn('Place non récupérée', err);
    });
  }

}
