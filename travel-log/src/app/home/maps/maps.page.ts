import {Component, OnInit} from '@angular/core';

// TODO: Geolocation
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';

// TODO: Leafleft
import {latLng, MapOptions, Map, marker, Marker, tileLayer} from 'leaflet';

// TODO: Marker
import { defaultIcon } from '../../../default-marker';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  mapOptions: MapOptions;
  mapMarkers: Marker[];
  map: Map;

  constructor(
      // TODO: Geolocation for user
      private geolocation: Geolocation
  ) {
    this.mapOptions = {
      layers: [
        tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { maxZoom: 18 }
        )
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };
    this.mapMarkers = [
      marker([ 46.7833, 6.65], { icon: defaultIcon }).bindTooltip('This is a another marker')
    ];
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      this.mapMarkers.push(marker([coords.latitude, coords.longitude], { icon: defaultIcon }).bindTooltip('This is you'));
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  // TODO: event
  onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
    this.map = map;
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }

}