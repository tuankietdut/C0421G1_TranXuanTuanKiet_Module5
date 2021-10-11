import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProjectionComponent} from "./list-projection/list-projection.component";
import {CreateProjectionComponent} from "./create-projection/create-projection.component";


const routes: Routes = [
  {path: '', component: ListProjectionComponent},
  {path: 'projection', component: ListProjectionComponent},
  {path: 'projection/create', component: CreateProjectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
