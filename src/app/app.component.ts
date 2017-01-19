import {Component, EventEmitter} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class InventoryApp {
  products: Array<Product>;
  test: number;
  constructor(){
    this.products = this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )];
    this.test = 0;
  }
  productWasSelected(product: Product): void{
    this.test++;
    console.log('Product clicked', product);
  }
}

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html'
})
export class ProductList{
  productList: Array<Product>;
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor(){
    this.onProductSelected = new EventEmitter();
  }
  clicked(product: Product){
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product){
    if(!product || !this.currentProduct){
      return false;
    }
    return product.scu === this.currentProduct.scu;
  }
}

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product-row.component.html'
})
export class ProductRow{
  product: Product;
}

@Component({
  selector: 'product-image',
  host: {'class': 'ui small image'},
  inputs: ['product'],
  template: `
<img class="product-image" [src]="product.imageUrl">
`
})
export class ProductImage{
  product: Product;
}

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
<div class="price-display">\${{ price }}</div>
`
})
export class PriceDisplay{
  price: number;
}

@Component({
  selector: 'product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html'
})
export class ProductDepartment{
  product: Product;
}
