import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../case-service/customer/customer.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customer";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerObj: Customer;
  constructor(private customerService: CustomerService,
              private http: HttpClient,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap) =>{
      const id_Cus = +paramMap.get("id");
      this.customerService.findById(id_Cus).subscribe((next) =>{
        try {
          this.customerObj = next;
        }catch (e) {
          console.log("errors")
        }})
      })
  }

  onDelete() {
    this.customerService.deleteCustomer(this.customerObj.id).subscribe((next)=> {alert("Done"); this.router.navigateByUrl("/customer")});
  }
}
