import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  productList: Product[] = [];

  product: Product = {
    id: 0,
    title: '',
    price: 0
  };

  isEdit = false;

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.getProducts();
  }

  // ✅ GET
  getProducts(){
    this.productService.onProductData().subscribe((data) => {
      this.productList = data;
    });
  }

  // ✅ ADD + UPDATE
  saveProduct(){
    if(this.isEdit){
      this.productService.onUpdateProduct(this.product).subscribe(() => {
        this.resetForm();
        this.getProducts();
      });
    } else {
      this.product.id = Date.now();
      this.productService.onAddProduct(this.product).subscribe(() => {
        this.resetForm();
        this.getProducts();
      });
    }
  }

  // ✅ DELETE
  deleteProduct(id: number){
    this.productService.onDeleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }

  // ✅ EDIT
  editProduct(p: Product){
    this.product = { ...p };
    this.isEdit = true;
  }

  resetForm(){
    this.product = { id: 0, title: '', price: 0 };
    this.isEdit = false;
  }
}

