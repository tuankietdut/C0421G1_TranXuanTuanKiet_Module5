import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FontSizeComponent } from './font-size/font-size.component';
import { InfoPetComponent } from './info-pet/info-pet.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PickColorComponent } from './pick-color/pick-color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    InfoPetComponent,
    ListProductComponent,
    CalculatorComponent,
    PickColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
