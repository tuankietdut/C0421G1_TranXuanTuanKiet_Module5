import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProjectionComponent} from "./list-projection/list-projection.component";
import {CreateProjectionComponent} from "./create-projection/create-projection.component";
import {ListCarComponent} from "./car-component/list-car/list-car.component";
import {EditCarComponent} from "./car-component/edit-car/edit-car.component";


const routes: Routes = [
  {path: '', component: ListCarComponent},
  {path: 'car/edit/:id', component: EditCarComponent},
  {path: 'projection', component: ListProjectionComponent},
  {path: 'projection/create', component: CreateProjectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
