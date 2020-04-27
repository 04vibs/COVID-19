import { Component, OnInit } from '@angular/core';
import { StateDataService } from '../services/state-data.service';
import { DetailsOfStateService } from '../services/details-of-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[];
  sampledata: any;
  selectedstatedata: any;
  statedata: {} ;
  sampledatastates: any;
  constructor(private stateData: StateDataService,
              private stateDetail: DetailsOfStateService) {
  }

  ngOnInit() {
    this.getStatesData();
  }

  getStatesData() {
    this.stateData.getStatesData()
    .subscribe(response => {
      this.data = Object.values(response);
      console.log(this.data[1]);
      this.sampledata = this.data[1];
    });
  }

  getStateDetails(state) {
    this.stateDetail.getStatesdetails()
    .subscribe(response => {
      console.log(response);
      this.statedata = response;
       console.log(this.statedata);
       this.sampledatastates = this.statedata[state]['districtData'];
    });
  }

  onSelect(state) {
    this.selectedstatedata = state;
    console.log(this.selectedstatedata);
    this.getStateDetails(state);
  }

}
