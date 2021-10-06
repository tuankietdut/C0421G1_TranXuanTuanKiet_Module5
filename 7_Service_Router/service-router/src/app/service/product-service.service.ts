import {Injectable} from '@angular/core';
import {Product} from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New'
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    }, {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }
  ];
  getAll(){
    return this.products;
  }
  saveProduct(product: Product){
    this.products.push(product);
  }
  findById(id: number){
   return this.products.find(value => value.id === id);
  }
  updateByProduct(product: Product){
    const index = this.products.findIndex((value) => value.id === product.id);
    this.products[index] = product;
  }
  deleteById(id: number){
    const index = this.products.findIndex((value) => value.id === id);
    if (index === -1){
      console.log("Ko tim thay")
      return;
    }
    this.products.splice(index, 1);
  }

  constructor() {
  }
}
