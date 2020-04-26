import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../utils/apiConstants';

@Injectable({
  providedIn: 'root'
})
export class DetailsOfStateService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.covid19india.org/state_district_wise.json';
  baseUrl1 = 'https://api.covid19india.org/data.json';
  getStatesData() {
    return this.http.get(this.baseUrl1);
  }
}
