import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServicesComponent } from './services/services.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PartnerComponent,
    CreateServiceComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PartnerModule { }
