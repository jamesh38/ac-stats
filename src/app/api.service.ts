import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getAveragePlayers() {
    return this.http.get(environment.url + '/averageplayers');
  }

  getRefs(): any {
    return this.http.get(environment.url + '/refs?period=60');
  }
}
