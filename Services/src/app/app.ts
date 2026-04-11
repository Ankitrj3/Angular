import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './services/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Services');
  productlist : {
    id: number;
    name: string;
    price: number;
}[] = [];
  constructor(private product: Product){}

  ngOnInit(){
    console.log(this.product.onProductData());
    this.productlist = this.product.onProductData();
  }
}
