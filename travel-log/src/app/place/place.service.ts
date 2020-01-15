import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Place} from '../models/place';

import { AuthService } from '../auth/auth.service';

import { TripService } from '../trip/trip.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  // API path
  base_path = '/api/places';

  httpOptions: object;

  constructor(private http: HttpClient, private authService: AuthService, private tripservice: TripService) {
    this.authService.getToken().subscribe(token => {
      // Http Options
      this.httpOptions = {
        headers: new HttpHeaders({
          // ajouter le token
          'Authorization': 'Bearer '+ token
        })
      }
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status},` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  };

  // Create a new place
  createPlace(place): Observable<Place> {
    return this.http
        .post<Place>(this.base_path, place, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
  }

  getPlaces(): Observable<Place[]> {
    return this.http
        .get<Place[]>('/api/places');
  }

  // // Get trip's places
  // getUserPlaces(): Observable<Place[]> {
  //   let tripId: string;
  //   this.tripservice.getTrips().subscribe(trip => tripId = trip.id);
  //   return this.http
  //       .get<Place[]>(`/api/places?trip=${tripId}`);
  // }
}