import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ProtectedRoutingModule } from './protected-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { ProtectedComponent } from './protected.component';
import { PostRegisterComponent } from './post-register/post-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RiskComponent } from './risk/risk.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SportsComponent } from './sports/sports.component';
import { AlimentaryComponent } from './alimentary/alimentary.component';

import { MatTabsModule } from '@angular/material/tabs';
import { DemographicComponent } from './demographic/demographic.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgChartsModule } from 'ng2-charts';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

import {
  ScheduleModule,
  RecurrenceEditorModule,
} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PlanComponent,
    ProtectedComponent,
    PostRegisterComponent,
    RiskComponent,
    ProfilesComponent,
    SportsComponent,
    AlimentaryComponent,
    DemographicComponent,
    CalendarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTabsModule,
    GoogleMapsModule,
    MatExpansionModule,
    NgChartsModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
})
export class ProtectedModule {}
