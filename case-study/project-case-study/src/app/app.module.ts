import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {EditServiceComponent} from './service/edit-service/edit-service.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {DeleteServiceComponent} from './service/delete-service/delete-service.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {AppRouterModule} from './app-router.module';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    ListServiceComponent,
    EditServiceComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    ListContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
