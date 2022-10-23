import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ProtectedRoutingModule } from './protected-routing.module';

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
import { MatExpansionModule } from '@angular/material/expansion';
import { NgChartsModule } from 'ng2-charts';

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
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    NgChartsModule,
  ],
})
export class ProtectedModule {}
