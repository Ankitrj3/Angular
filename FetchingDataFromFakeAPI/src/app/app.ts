import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './services/product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FetchingDataFromFakeAPI');

  constructor(private product: Product) {

  }
  productList: any[] = [];

  ngOnInit() {
    this.product.onProductData().subscribe((data: any) => {
      console.log("FULL DATA:", data);

      this.productList = data.products;

      console.log("PRODUCT LIST:", this.productList);
    });
  }
}
