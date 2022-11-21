import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  baseURL = "https://countriesnow.space/api/v0.1";

  getContryStates() {
    return this.http.get(this.baseURL+"/countries/states");
  }
}
