import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployerComponent } from '../employer/add-employer/add-employer.component';
const routes: Routes = [
  { path: '', component: AddEmployerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
