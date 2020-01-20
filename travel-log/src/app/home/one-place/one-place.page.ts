import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../../place/place.service';
import {Place} from '../../models/place';
import {ActivatedRoute, ParamMap} from '@angular/router';

// TODO: Leafleft
import {latLng, Map, MapOptions, Marker, marker, tileLayer} from 'leaflet';
import {defaultIcon} from '../../../default-marker';

@Component({
    selector: 'app-one-place',
    templateUrl: './one-place.page.html',
    styleUrls: ['./one-place.page.scss'],
})
export class OnePlacePage implements OnInit {
    place: Place;
    places: Place[] = [];
    placeId: any;
    mapOptions: MapOptions;
    mapMarkers: Marker[];
    map: Map;

    constructor(
        // TODO: Service
        private placeService: PlaceService,
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.placeId = params.get('placeId');
        });
        this.place = new Place();
        this.mapOptions = {
            layers: [
                tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {maxZoom: 18}
                )
            ],
            zoom: 13,
            center: latLng(46.778186, 6.641524)
        };
        this.mapMarkers = [
            marker([46.7833, 6.65], {icon: defaultIcon}).bindTooltip('This is a another marker')
        ];
    }

    ngOnInit() {
        this.placeService.getOnePlace(this.placeId).subscribe(receivedPlace => {
            this.place = receivedPlace;
            this.mapMarkers.push(marker([this.place.location.coordinates[0], this.place.location.coordinates[1]], {icon: defaultIcon}).bindTooltip(this.place.name));
        }, err => {
            console.warn('Error', err);
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
