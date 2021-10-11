import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";
import {CustomerService} from "../../case-service/customer/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerArr: Customer[];

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {
    this.customerService.getAll().subscribe(
      (next) => this.customerArr = next,
      (error) => console.log(error)
    )
  }

  ngOnInit(): void {
  }

  showEdit(id: number) {
    this.router.navigate(['customer','edit', id])
  }

  showDelete(id: number) {
    this.router.navigate(['customer','delete', id])
  }

}
