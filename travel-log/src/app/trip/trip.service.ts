import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Trip } from '../models/trip';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class TripService {

	// API path
	base_path = '/api/trips';

	httpOptions: object;

	constructor(private http: HttpClient, private authService: AuthService) {
		this.authService.getToken().subscribe(token => {
			// Http Options
			this.httpOptions = {
				headers: new HttpHeaders({
					// ajouter le token
					'Authorization': 'Bearer ' + token
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
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	};

	// Create a new trip
	createTrip(trip): Observable<Trip> {
		return this.http
			.post<Trip>(this.base_path, trip, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			)
	}

	// Get trips
	getTrips(): Observable<Trip[]> {
		return this.http.get<Trip[]>(`api/trips`);
	}

	getOneTrip(id): Observable<Trip> {
		return this.http
			.get<Trip>(this.base_path + '/' + id)
			.pipe(
				retry(2),
				catchError(this.handleError)
			)
	}

	// Get trips' user
	getUserTrips(): Observable<Trip[]> {
		let userId: string;
		this.authService.getUser().subscribe(user => userId = user.id);
		return this.http
			.get<Trip[]>(`/api/trips?user=${userId}`);
	}

	// Filter trips
	filterTrips(filter): Observable<Trip[]>{
		return this.http
			.get<Trip[]>(`/api/trips?sort=${filter}`);

	}

	// Update item by id
	updateTrip(id, item): Observable<Trip> {
		return this.http
			.patch<Trip>(this.base_path + '/' + id, item, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			)
	}

	// Delete trip by id
	deleteTrip(id) {
		return this.http
			.delete<void>(this.base_path + '/' + id, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			)
	}
}
