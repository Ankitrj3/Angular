import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){
    console.log('product service created');
  }
  onProductData(){
    return [
      {id: 1, name: 'laptop', price: 50000},
      {id: 2, name: 'mobile', price: 20000},
      {id: 3, name: 'tablet', price: 30000},
    ];
  }
}
