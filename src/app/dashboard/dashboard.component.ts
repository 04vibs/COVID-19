import { Component, OnInit } from '@angular/core';
import { DetailsOfStateService } from '../services/details-of-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[];
  sampledata: any[];
  constructor(private detailsOfStateservice: DetailsOfStateService) {
  }

  ngOnInit() {
    this.getStatesData();
  }

  getStatesData() {
    this.detailsOfStateservice.getStatesData()
    .subscribe(response => {
      console.log(response);

      console.log(Object.keys(response),'keys');
     // this.data = Object.keys(response);
       console.log(Object.entries(response),'entries');
        this.data = Object.entries(response);
        console.log(Object.values(response),'values');
      //  this.data = Object.values(response);
      // // console.log(this.data);
      // //  this.data = JSON.stringify(response);
      // this.sampledata = Object.values(response);
      // for (let value of Object.values(this.sampledata)) {
      //   console.log(value.districtData);
      // }
    });
  }

}
