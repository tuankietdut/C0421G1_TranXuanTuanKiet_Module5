import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";
import {DeleteProductComponent} from "./product/delete-product/delete-product.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateProductComponent,
    ListProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
