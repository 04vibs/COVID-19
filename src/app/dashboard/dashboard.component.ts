import { Component, OnInit } from '@angular/core';
import { DetailsOfStateService } from '../services/details-of-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[];
  sampledata: any;
  constructor(private detailsOfStateservice: DetailsOfStateService) {
  }

  ngOnInit() {
    this.getStatesData();
  }

  getStatesData() {
    this.detailsOfStateservice.getStatesData()
    .subscribe(response => {
      this.data = Object.values(response);
      console.log(this.data[1]);
      this.sampledata = this.data[1];
    });
  }

}
