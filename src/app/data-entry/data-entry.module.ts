import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { SharedModule } from './../shared/shared.module';

// containers
import { DaySummaryComponent } from './containers/day-summary/day-summary.component';
import { DayWiseFormComponent } from './containers/day-wise-form/day-wise-form.component';

// components
// import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
// import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// service
import { DaySummaryService } from './containers/day-summary/day-summary.service';
import { DayWiseFormService } from './containers/day-wise-form/day-wise-form.service';
import { DayWiseFormResolver } from './containers/day-wise-form/day-wise-form-resolver.service';

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
      }
    ]
  }
];

@NgModule({
  declarations: [
    DaySummaryComponent,
    DayWiseFormComponent,
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
    DayWiseFormResolver
  ]
})
export class DataEntryModule { }