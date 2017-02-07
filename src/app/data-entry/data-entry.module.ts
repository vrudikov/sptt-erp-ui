import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { SharedModule } from './../shared/shared.module';

// containers
import { DaySummaryComponent } from './containers/day-summary/day-summary.component';
import { DayWiseFormComponent } from './containers/day-wise-form/day-wise-form.component';
import { TripWiseFormComponent } from './containers/trip-wise-form/trip-wise-form.component';
import { TripSummaryComponent } from './containers/trip-summary/trip-summary.component';

// components
// import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
// import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// service
import { DaySummaryService } from './containers/day-summary/day-summary.service';
import { DayWiseFormService } from './containers/day-wise-form/day-wise-form.service';
import { DayWiseFormResolver } from './containers/day-wise-form/day-wise-form-resolver.service';
import { TripSummaryService } from './containers/trip-summary/trip-summary.service';
import { TripWiseFormService } from './containers/trip-wise-form/trip-wise-form.service';
import { TripWiseFormResolver } from './containers/trip-wise-form/trip-wise-form-resolver.service';

const routes: Routes = [
  {
    path: 'day-summary',
    children: [
      { path: '', component: DaySummaryComponent },
      { path: 'new', component: DayWiseFormComponent },
      {
        path: ':id',
        component: DayWiseFormComponent,
        resolve: {
          alldaySummary: DayWiseFormResolver
        }
      },
      {
        path: ':id/trips',
        component: TripSummaryComponent,
        resolve: {
          alldaySummary: DayWiseFormResolver
        }
      },
      {
        path: ':id/trip/new',
        component: TripWiseFormComponent,
        resolve: {
          alldaySummary: DayWiseFormResolver
        }
      },
      {
        path: ':id/trip/:trip-id',
        component: TripWiseFormComponent,
         resolve: {
          alldaySummary: DayWiseFormResolver,
          tripSummary: TripWiseFormResolver
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    DaySummaryComponent,
    DayWiseFormComponent,
    TripSummaryComponent,
    TripWiseFormComponent
  ],
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DaySummaryService,
    DayWiseFormService,
    DayWiseFormResolver,
    TripSummaryService,
    TripWiseFormService,
    TripWiseFormResolver
  ]
})
export class DataEntryModule { }