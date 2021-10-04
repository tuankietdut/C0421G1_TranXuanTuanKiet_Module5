import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerArr: Customer[] = [
    {customer_id: 1,customer_code: "KH-0001" , customer_name: "Quan vu", customer_birthday: "10/08/2000", customer_gender: 1, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 2,customer_code: "KH-0002", customer_name: "Luu Bi", customer_birthday: "10/08/2005", customer_gender: 0, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 3, customer_code: "KH-0003",  customer_name: "Truong Phi", customer_birthday: "10/08/2001", customer_gender: 1, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 4, customer_code: "KH-0004",  customer_name: "Lu Bo", customer_birthday: "10/08/2010", customer_gender: 2, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
