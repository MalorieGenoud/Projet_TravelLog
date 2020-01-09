import { Injectable } from '@angular/core';
import { Place } from '../models/place';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http
    .get<Place[]>('/api/places');
  }
}