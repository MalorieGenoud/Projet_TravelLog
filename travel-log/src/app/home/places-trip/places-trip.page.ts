import { Component, OnInit } from '@angular/core';
import {Place} from '../../models/place';
import {PlaceService} from '../../place/place.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-places-trip',
  templateUrl: './places-trip.page.html',
  styleUrls: ['./places-trip.page.scss'],
})
export class PlacesTripPage implements OnInit {
  places: Place[] = [];
  tripId: any;

  constructor(
      // TODO: Service
      private placeService: PlaceService,
      private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tripId = params.get('tripId');
    });
  }

  ngOnInit() {
    this.placeService.getTripPlaces(this.tripId).subscribe(receivedPlaces => {
      this.places = receivedPlaces;
      console.log(receivedPlaces);
    }, err => {
      console.warn('Error', err);
    });
  }

  delete(place) {
    //Delete trip in Trip data
    this.placeService.deletePlace(place.id).subscribe(Response => {
      //Update list after delete is successful
      location.reload();
    });
  }

  filter(data){
    this.placeService.filterPlaces(data.detail.value).subscribe(response =>{
      // Ne fonctionne pas pour une raison qui m'échappe
      // this.places = response;
    })
  }

}
