import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = "http://localhost:3000/customer";

  constructor(private http: HttpClient) { }
  getAll():Observable<Customer[] | any>{
    return this.http.get(this.URL_CUSTOMER);
  }
  findById(id: number){
    return this.http.get(this.URL_CUSTOMER + "/" + id);
  }
  createCustomer(customer: Customer){
    return this.http.post(this.URL_CUSTOMER, customer);
  }
  updateCustomer(customer: Customer){
    return this.http.put(this.URL_CUSTOMER + "/" + customer.id, customer);
  }
  deleteCustomer(id:number){
    return this.http.delete(this.URL_CUSTOMER + "/" + id);
  }
}
