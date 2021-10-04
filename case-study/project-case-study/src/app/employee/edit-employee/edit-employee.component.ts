import { Component, OnInit } from '@angular/core';
import {PositionEmployee} from "../positionEmployee";
import {EducationDegree} from "../education-degree";
import {Division} from "../division";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  positionArr: PositionEmployee[] = [
    {id: 1, name: "Le tan"},
    {id: 2 , name:	"Phuc vu"},
    {id: 3, name:	"Chuyen vien"},
    {id: 4, name:	"Giam sat"},
    {id: 5, name:	"Quan ly"},
    {id: 6, name:	"Giam doc"},
  ];
  educationArr: EducationDegree[] = [
    {id: 1, name: "Trung cap"},
    {id: 2, name: "Cao dang"},
    {id: 3, name: "Dai hoc"},
    {id: 4, name: "Sau dai hoc"},
  ];
  divisionArr: Division[] = [
    {id: 1, name: "Sale Makerting"},
    {id: 2, name: "Hanh chinh"},
    {id: 3, name: "Phuc vu"},
    {id: 4, name: "Quan ly"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
