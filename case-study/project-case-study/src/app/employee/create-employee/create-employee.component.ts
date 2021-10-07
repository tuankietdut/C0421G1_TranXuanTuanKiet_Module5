import { Component, OnInit } from '@angular/core';
import {PositionEmployee} from "../positionEmployee";
import {EducationDegree} from "../education-degree";
import {Division} from "../division";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";
import {PositionService} from "../../case-service/employee/position.service";
import {EducationService} from "../../case-service/employee/education.service";
import {DivisionService} from "../../case-service/employee/division.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    employee_id: new FormControl(),
    employee_name: new FormControl('', Validators.compose([Validators.required])),
    employee_birthday: new FormControl('', Validators.compose([Validators.required])),
    employee_id_card: new FormControl('', Validators.compose([Validators.required])),
    employee_salary: new FormControl('', Validators.compose([Validators.required])),
    employee_phone: new FormControl('', Validators.compose([Validators.required])),
    employee_email: new FormControl('', Validators.compose([Validators.required])),
    employee_address: new FormControl('', Validators.compose([Validators.required])),
    position_id: new FormControl(),
    education_id: new FormControl(),
    division_id: new FormControl()
  });
  positionArr: PositionEmployee[] = [];
  educationArr: EducationDegree[] = [];
  divisionArr: Division[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private educationService: EducationService,
    private divisionService: DivisionService
  ) {
    this.positionService.getAll().subscribe((next)=> {
      this.positionArr = next;
      console.log(this.positionArr)
    })
    this.educationService.getAll().subscribe((next)=> {
      this.educationArr = next;
      console.log(this.educationArr)
    })
    this.divisionService.getAll().subscribe((next)=> {
      this.divisionArr = next;
      console.log(this.divisionArr)
    })
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe((next) => {
      this.router.navigateByUrl('/employee');
    })
  }
}
