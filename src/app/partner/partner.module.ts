import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServicesComponent } from './services/services.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    PartnerComponent,
    CreateServiceComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    DeleteServiceComponent,
    ActivitiesComponent,
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PartnerModule { }
