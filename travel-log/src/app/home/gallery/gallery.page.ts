import { Component, OnInit } from '@angular/core';

import {PhotoService} from '../../photo/photo.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  constructor(public photoService: PhotoService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
