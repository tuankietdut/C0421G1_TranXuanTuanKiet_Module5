import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerType: CustomerType[] = [
    {id:1 , name:"Diamond"},
    {id:2 , name:"Gold"},
    {id:3 , name:"Silver"},
    {id:4 , name:"Bronze"},
    {id:5 , name:"Member"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
