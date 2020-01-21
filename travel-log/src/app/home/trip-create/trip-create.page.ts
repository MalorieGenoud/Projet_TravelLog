import {Component, OnInit} from '@angular/core';

import {Trip} from 'src/app/models/trip';
import {TripService} from 'src/app/trip/trip.service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-trip-create',
    templateUrl: './trip-create.page.html',
    styleUrls: ['./trip-create.page.scss'],
})
export class TripCreatePage implements OnInit {

    data: Trip;
    createError: boolean;

    constructor(
        public tripService: TripService,
        public router: Router
    ) {
        this.data = new Trip();
    }

    ngOnInit() {
    }

    submitForm(form: NgForm) {
        // Do not do anything if the form is invalid.
        if (form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.createError = false;

        this.tripService.createTrip(this.data).subscribe({
            next: () => {
                console.log("trip added");
                location.reload();
            },
            error: err => {
                this.createError = true;
                console.warn(`Create a trip failed: ${err.message}`);
            }
        });
    }
}