import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeObj: Employee;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService,
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id_employee = +paramMap.get("id");
      this.employeeService.findById(id_employee).subscribe((next) => {
        console.log(next);
        this.employeeObj = next;
      });
    })
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.employeeService.deleteEmployee(this.employeeObj.employee_id).subscribe((next)=>{
      this.router.navigateByUrl("/employee");
    })
  }
}
