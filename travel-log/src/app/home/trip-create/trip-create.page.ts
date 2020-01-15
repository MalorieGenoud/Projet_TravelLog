import { Component, OnInit } from '@angular/core';

import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/trip/trip.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.page.html',
  styleUrls: ['./trip-create.page.scss'],
})
export class TripCreatePage implements OnInit {
  
  data: Trip
  
  constructor(
    public tripService: TripService,
    public router: Router
    ) {
      this.data = new Trip();
    }
    
    ngOnInit() {
    }
    
    submitForm() {
      this.tripService.createTrip(this.data).subscribe((response) => {
        console.log("trip added");
        location.reload();
      });
      
    }
    
  }
