import {Component, OnInit} from '@angular/core';

import {Place} from 'src/app/models/place';
import {PlaceService} from 'src/app/place/place.service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-place-create',
    templateUrl: './place-create.page.html',
    styleUrls: ['./place-create.page.scss'],
})
export class PlaceCreatePage implements OnInit {

    data: Place;
    createError: boolean;

    constructor(
        public placeService: PlaceService,
        public router: Router
    ) {
        this.data = new Place();
        this.data.location = {
            coordinates: [],
            type: "Point"
        };
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

        this.placeService.createPlace(this.data).subscribe({
            next: () => {
                console.log("place added");
                location.reload();
            },
            error: err => {
                this.createError = true;
                console.warn(`Create a trip failed: ${err.message}`);
            }
        });
    }
}
