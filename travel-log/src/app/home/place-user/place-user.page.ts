import { Component, OnInit } from '@angular/core';
import {Place} from '../../models/place';
import {PlaceService} from '../../place/place.service';

@Component({
  selector: 'app-place-user',
  templateUrl: './place-user.page.html',
  styleUrls: ['./place-user.page.scss'],
})
export class PlaceUserPage implements OnInit {
  places: Place[] = [];

  constructor(
      // TODO: Service
      private placeService: PlaceService
  ) { }

  ngOnInit() {
    // this.placeService.getUserPlaces().subscribe(receivedPlaces => {
    //   this.places = receivedPlaces;
    //   console.log(receivedPlaces);
    // }, err => {
    //   console.warn('Error', err);
    // });
  }

}
