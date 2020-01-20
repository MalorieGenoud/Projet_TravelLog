import { Component, OnInit } from '@angular/core';

import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/place/place.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.page.html',
  styleUrls: ['./place-create.page.scss'],
})
export class PlaceCreatePage implements OnInit {
  
  data: Place
  
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
    
    submitForm() {
      this.placeService.createPlace(this.data).subscribe((response) => {
        console.log("place added");
        //Update list after delete is successful
        location.reload();
      });
      
    }
    
  }
