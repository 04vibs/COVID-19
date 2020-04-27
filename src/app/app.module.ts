import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

import { DetailsOfStateService } from './services/details-of-state.service';
import { StateDataService } from './services/state-data.service';
import { HttpClientModule } from '@angular/common/http';
//import { StateDetailsComponent } from './state-details/state-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecautionsComponent,
    DashboardComponent,
    LatestNewsComponent,
  //  StateDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    DetailsOfStateService,
    StateDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
