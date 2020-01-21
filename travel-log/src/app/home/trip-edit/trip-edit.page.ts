import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Trip } from '../../models/trip';
import { TripService } from '../../trip/trip.service';
import { CacheService } from 'src/app/cache.service';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-trip-edit',
    templateUrl: './trip-edit.page.html',
    styleUrls: ['./trip-edit.page.scss'],
})

export class TripEditPage implements OnInit {

    trip: Trip;
    tripId: any;
    createError: boolean;

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

    update(form: NgForm) {

        // Do not do anything if the form is invalid.
        if (form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.createError = false;

        this.tripService.updateTrip(this.tripId, this.trip).subscribe({
            next: () => {
                console.log("trip added");
                location.reload();
            },
            error: err => {
                this.createError = true;
                console.warn(`Update a trip failed: ${err.message}`);
            }
        });
    }

}