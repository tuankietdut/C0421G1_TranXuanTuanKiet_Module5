import { Component, OnInit } from '@angular/core';
import {PositionEmployee} from "../positionEmployee";
import {EducationDegree} from "../education-degree";
import {Division} from "../division";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";
import {PositionService} from "../../case-service/employee/position.service";
import {EducationService} from "../../case-service/employee/education.service";
import {DivisionService} from "../../case-service/employee/division.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    employee_name: new FormControl('',Validators.compose([Validators.required])),
    employee_birthday: new FormControl('',Validators.compose([Validators.required])),
    employee_id_card: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(NV-)[\\d]{4}$')])),
    employee_salary: new FormControl('',Validators.compose([Validators.required])),
    employee_phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^((\\(84\\)\\+(90))|(090)|(091)|(\\(84\\)\\+(91)))[\\d]{7}$")])),
    employee_email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    employee_address: new FormControl('',Validators.compose([Validators.required])),
    position_id: new FormControl(''),
    education_id: new FormControl(''),
    division_id: new FormControl(''),
  })
  positionArr: PositionEmployee[];
  educationArr: EducationDegree[];
  divisionArr: Division[];

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private educationService: EducationService,
    private divisionService: DivisionService
  ) {
    this.positionService.getAll().subscribe((next)=> {
      this.positionArr = next;
      console.log(next);
      this.educationService.getAll().subscribe((next)=> {
        this.educationArr = next;
        console.log(next);
        this.divisionService.getAll().subscribe((next)=> {
          this.divisionArr = next;
          console.log(next);
          this.activeRouter.paramMap.subscribe((paramMap:ParamMap)=>{
            const id_employee = +paramMap.get("id");
            console.log(id_employee + "Id here");
            this.employeeService.findById(id_employee).subscribe(
              (next) => {console.log(next);
              try {
                this.employeeForm.setValue(next);
              }catch (e) {
                console.log("Errosr")
              }
              },
            (errors) => {console.log("Erros")}
            )})

          // console.log(this.positionArr)
    })

      // console.log(this.educationArr)
    })

      // console.log(this.divisionArr)
    })
  }

  ngOnInit(): void {
  }

  onUpdate() {
    if (this.employeeForm.valid){
      this.employeeService.updateEmployee(this.employeeForm.value).subscribe((next)=>{
        this.router.navigateByUrl('/employee');
      })
    }
  }

  validationMessage = {
    employee_id_card:[
      {type: "required", message: "Bat buoc nhap"},
      {type: "pattern", message: "Nhap dung dinh dang NV-XXXX"},
    ],
    employee_phone: [
      {type: "required", message: "Bat buoc nhap"},
      {type: "pattern", message: "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx"}
    ],
    employee_email: [
      {type: "required", message: "Bat buoc nhap"},
      {type: "email", message: "Dung dinh dang email"}
    ]
  }

}
