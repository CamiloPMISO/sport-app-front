import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanComponent } from './plan/plan.component';
import { ProtectedComponent } from './protected.component';
import { PostRegisterComponent } from './post-register/post-register.component';
import { ProfilesComponent } from './profiles/profiles.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    children: [
      {
        path: 'post-register',
        component: PostRegisterComponent,
      },
      {
        path: 'planes',
        component: PlanComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'perfiles',
        component: ProfilesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
