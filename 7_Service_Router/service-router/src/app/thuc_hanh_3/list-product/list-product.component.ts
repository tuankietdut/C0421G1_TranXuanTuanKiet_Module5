import { Component, OnInit } from '@angular/core';
import {Product} from '../../interface/product';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  constructor(private ProductService: ProductServiceService, private router: Router) { }
  ngOnInit(): void {
    this.products = this.ProductService.getAll();
  }

  showEdit(id: number) {
    this.router.navigate(['product', 'edit', id]);
  }

  showDelete(id: number) {
    this.router.navigate(['product', 'delete', id]);
  }
}
