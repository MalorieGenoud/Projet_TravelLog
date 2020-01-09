import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TripResponse } from '../models/trip-response';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http
    .get<Trip[]>('/api/trips');
  }
}