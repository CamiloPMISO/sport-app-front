import { AdminComponent } from './admin.component';
import { CreateIndicatorComponent } from './create-indicator/create-indicator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'crearindicador', component: CreateIndicatorComponent },
      { path: '**', redirectTo: 'public/home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
