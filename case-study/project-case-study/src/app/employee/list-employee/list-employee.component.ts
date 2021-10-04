import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeArr: Employee[] = [
    {employee_id: 1, employee_name: "Tran Van Chien", employee_birthday: "10/08/2001", employee_id_card:"KH-0001", employee_salary: 5000, employee_phone:"0123451712", employee_email:"chien@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 2, employee_name: "Quan vu", employee_birthday: "10/08/2002", employee_id_card:"KH-0002", employee_salary: 8000, employee_phone:"0123451712", employee_email:"quanvu@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 3, employee_name: "Luu Bi", employee_birthday: "10/08/2000", employee_id_card:"KH-0003", employee_salary: 1000, employee_phone:"0123451712", employee_email:"luubi@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 4, employee_name: "Tao thao ", employee_birthday: "10/08/1850", employee_id_card:"KH-0004", employee_salary: 6000, employee_phone:"0123451712", employee_email:"taothao@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
