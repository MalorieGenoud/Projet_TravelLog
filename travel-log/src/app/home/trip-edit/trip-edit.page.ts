import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Trip } from '../../models/trip';
import { TripService } from '../../trip/trip.service';
import { CacheService } from 'src/app/cache.service';

@Component({
    selector: 'app-trip-edit',
    templateUrl: './trip-edit.page.html',
    styleUrls: ['./trip-edit.page.scss'],
})

export class TripEditPage implements OnInit {

    id: number;
    trip: Trip;
    tripId: any;

    constructor(
        //public router: ParamMap,
        public tripService: TripService,
        private route: ActivatedRoute
    ) {
        this.trip = new Trip();
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.tripId = params.get('id');
        });
    }

    ngOnInit() {
        //get trip details using id
        this.tripService.getOneTrip(this.tripId).subscribe(response => {
            console.log(response);
            this.trip = response;
        })
    }

    update() {
        //Update trip by taking id and updated data object
        this.tripService.updateItem(this.trip).subscribe(response => {
            console.log("trip updated", response);
        })
    }

}