import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BookLibrary } from './core/book-library.interface';
import { Observable } from 'rxjs';

// The 'DataService' is a service responsible for fetching data and providing book listing functionality.
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Fetch data from the specified API URL defined in the environment configuration.
  // Return will be of type BookLibrary
  fetchData(): Observable<BookLibrary> {
    return this.http.get<BookLibrary>(environment.apiUrl);
  }

  // Conditional logging function that logs the provided 'tag' and 'value'
  // only if the application is not in production mode.
  log(tag: string, value: string|object) {
    if (!environment.production) {
      console.log(tag, value);
    }
  }
}