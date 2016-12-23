import { Component } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory App';
  constructor(){

  }
  productWasSelected(product: Product): void{
    console.log('Product Clicked: ', product);
  }
}
