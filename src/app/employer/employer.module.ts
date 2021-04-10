import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddEmployerComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule 
  ]
})
export class EmployerModule { }
