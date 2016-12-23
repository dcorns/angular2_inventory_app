import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )];
  }

  ngOnInit() {
  }

}
