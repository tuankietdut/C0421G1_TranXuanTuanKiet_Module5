import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProjectionComponent } from './list-projection/list-projection.component';
import { CreateProjectionComponent } from './create-projection/create-projection.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteProjectionComponent } from './delete-projection/delete-projection.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { ListCarComponent } from './car-component/list-car/list-car.component';
import { EditCarComponent } from './car-component/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProjectionComponent,
    CreateProjectionComponent,
    DeleteProjectionComponent,
    ListCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
