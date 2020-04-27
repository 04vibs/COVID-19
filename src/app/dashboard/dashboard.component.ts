import { Component, OnInit } from '@angular/core';
import { StateDataService } from '../services/state-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[];
  sampledata: any;
  selectedstatedata: any;
  constructor(private stateData: StateDataService) {
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
  onSelect(state) {
    this.selectedstatedata = state;
    console.log(this.selectedstatedata);
    // routing to navigate to selected state
  }
}
