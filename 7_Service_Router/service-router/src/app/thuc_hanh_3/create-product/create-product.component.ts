import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private ProductService: ProductServiceService, private router: Router) {

  }
  onCreate(){
    if (this.productForm.valid){
      this.ProductService.saveProduct(this.productForm.value);
      this.productForm.reset();
      this.router.navigateByUrl('/product');
    }
  }

  ngOnInit(): void {
  }

}
