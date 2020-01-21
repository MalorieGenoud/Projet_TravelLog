import { Component, OnInit } from '@angular/core';
// TODO: import Angular's HTTP client.
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Place } from '../../models/place';
import { PlaceService } from '../../place/place.service';

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
    // TODO: Service
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(receivedPlaces => {
      this.places = receivedPlaces;
      console.log(receivedPlaces);
    }, err => {
      console.warn('Place non récupérée', err);
    });
  }

  filter(data){
    this.placeService.filterPlaces(data.detail.value).subscribe(response =>{
      // Ne fonctionne pas pour une raison qui m'échappe
      // this.places = response;
    })
  }
}
