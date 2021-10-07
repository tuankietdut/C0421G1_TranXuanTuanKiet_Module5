import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeArr: Employee[];
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeService.getAll().subscribe((next) =>{
      this.employeeArr = next;
    })
  }

  ngOnInit(): void {
  }

  showEdit(employee_id: number) {
    this.router.navigate(['employee','edit', employee_id]);
  }

  showDelete(employee_id: number) {
    this.router.navigate(['employee','delete', employee_id]);
  }
}
