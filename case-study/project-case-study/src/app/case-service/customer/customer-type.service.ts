import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private URL_CUSTYPE = "http://localhost:3000/customerType";
  constructor(private http: HttpClient) { }
  getAll(): Observable<CustomerType[] | any>{
    return  this.http.get(this.URL_CUSTYPE);
  }
}
