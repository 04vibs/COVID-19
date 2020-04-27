// import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
// import { DetailsOfStateService } from '../services/details-of-state.service';

// @Component({
//   selector: 'app-state-details',
//   templateUrl: './state-details.component.html',
//   styleUrls: ['./state-details.component.scss']
// })
// export class StateDetailsComponent implements OnInit, AfterViewInit {

//   constructor(private stateDetailService: DetailsOfStateService) { }
//   statedata: any[];
//   sampledata: any;
//   @Input() selectedStatecode;
//   ngOnInit() {
//     this.getStateData();
//   }
//   ngAfterViewInit() {
//     this.getStateData();
//   }

//   getStateData() {
//    // console.log(this.selectedStatecode);
//       this.stateDetailService.getStatesData()
//     .subscribe((response) => {
//       console.log(response);
//       this.statedata = Object.values(response);
//       console.log(this.statedata);
//       this.sampledata = this.statedata;
//     });
//   }

//     getparticularstatedata() {
//     console.log(this.sampledata);
//     console.log(this.selectedStatecode);
//   }
// }

//   //  //   console.log(Object.entries(this.sampledata));
//   //   //   const{ districtData, statecode} = this.sampledata;
//   //   // console.log(districtData);
//   //   // console.log(statecode);
//   //   //   // console.log(Object.entries(this.sampledata));
//   //      console.log(this.sampledata[0].districtData);
//   //     // console.log(Object.keys(this.sampledata[0].districtData));
//   //      console.log(Object.entries(this.sampledata[0].districtData));
//   //      console.log(Object.values(this.sampledata[0].districtData));
//   //      console.log(this.sampledata[0].statecode);
//   //   //   console.log(this.statedata[0].districtData, 'dd');
//     //   console.log(this.statedata[0].statecode, 'sc');

//     //  // let d = (this.statedata[0].districtData, 'dd');

//     //   console.log(this.statedata[0].districtData, 'dd');
//     //   console.log(Object.values(this.statedata[0].districtData), 'objvalues');


//   //get particular state from input
//   //compare it with data from api
//   //if matche then assign data of that particular state
//   //display on html


