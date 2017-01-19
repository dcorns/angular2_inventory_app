import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InventoryApp, ProductList, ProductRow, ProductImage, ProductDepartment, PriceDisplay} from "./app.component";

@NgModule({
  declarations: [
    InventoryApp,
    ProductList,
    ProductRow,
    ProductImage,
    ProductDepartment,
    PriceDisplay
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InventoryApp]
})
export class AppModule { }
