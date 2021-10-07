import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";
import {DeleteEmployeeComponent} from "./employee/delete-employee/delete-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";

  const router: Routes = [
    {path: "employee", component: ListEmployeeComponent},
    {path: "employee/create", component: CreateEmployeeComponent},
    {path: "employee/edit/:id", component: EditEmployeeComponent},
    {path: "employee/delete/:id", component: DeleteEmployeeComponent},
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ]
})
export class AppRouterModule { }
