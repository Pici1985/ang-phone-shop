import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigserviceService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/posts/';

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
