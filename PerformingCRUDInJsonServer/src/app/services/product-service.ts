import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient){}

  onProductData():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  onAddProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }
  onUpdateProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }
  onDeleteProduct(id: number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`);
  }
}
