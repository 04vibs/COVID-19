import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsOfStateService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.covid19india.org/state_district_wise.json';
  getStatesData() {
    return this.http.get(this.baseUrl);
  }
}
