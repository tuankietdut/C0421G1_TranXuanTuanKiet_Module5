import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../interface/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productObj: Product | undefined;
  constructor(
    private productService: ProductServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const idProduct = +paramMap.get('id');
      this.productObj = this.productService.findById(idProduct);
      console.log(this.productObj);
    // let idProduct= this.activeRouter.snapshot.params.id;
    // console.log(idProduct)
    // this.productObj = this.productService.findById(idProduct);
    // console.log(this.productObj);
  });
  }

  ngOnInit(): void {

  }
  onDelete(){
    let index = this.activeRouter.snapshot.params.id;
    this.productService.deleteById(index);
    this.router.navigateByUrl('product');
  }


}
