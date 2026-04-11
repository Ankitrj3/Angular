import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  baseUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient){}

  onProductData(){
    return this.http.get(this.baseUrl);
  }
}
