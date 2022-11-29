import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServicesComponent } from './services/services.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { PartnerComponent } from './partner.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { ActivitiesComponent } from './activities/activities.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: '',
    component: PartnerComponent,
    children: [
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'create-service',
        component: CreateServiceComponent,
      },
      {
        path: 'delete-service',
        component: DeleteServiceComponent,
      },
      {
        path: 'activities',
        component: ActivitiesComponent,
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
export class PartnerRoutingModule {}
