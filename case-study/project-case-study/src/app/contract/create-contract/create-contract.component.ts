import { Component, OnInit } from '@angular/core';
import {Customer} from "../../customer/customer";
import {Employee} from "../../employee/employee";
import {ServiceManager} from "../../service/serviceManager";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ContractService} from "../../case-service/contract/contract.service";
import {EmployeeService} from "../../case-service/employee/employee.service";
import {CustomerService} from "../../case-service/customer/customer.service";
import {ServiceManagerService} from "../../case-service/service/service-manager.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  customerArr: Customer[];
  employeeArr: Employee[];
  serviceArr: ServiceManager[];
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    contract_start_day: new FormControl(),
    contract_end_day: new FormControl(),
    contract_deposit: new FormControl(),
    contract_total_money: new FormControl(),
    employee: new FormControl(),
    customer: new FormControl(),
    service: new FormControl()
  })

  constructor(private router: Router, private contractService: ContractService,
              private employeeService: EmployeeService, private customerService: CustomerService,
              private serviceManagerService: ServiceManagerService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(next => this.employeeArr = next);
    this.customerService.getAll().subscribe(next => this.customerArr = next);
    this.serviceManagerService.getAll().subscribe(next => this.serviceArr = next);
  }

  onCreate() {
    this.contractService.createContract(this.contractForm.value).subscribe(
      next => this.router.navigateByUrl('/contract'),
      error => console.log("Errors"))
  }
}
