import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from "../employee";
import {Router} from "@angular/router";
import {EmployeeService} from "../../case-service/employee/employee.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  page = 1;
  employeeArr: Employee[] = [];
  totalNumber: number;
  sort: boolean = false;
  // dataSource = new MatTableDataSource(this.employeeArr);
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeService.paginator(this.page).subscribe((next) =>{
      console.log(next)
      this.employeeArr = next;
      this.employeeService.getAll().subscribe(next =>{
        this.totalNumber = next.length /2;
      })
    })
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  showEdit(employee_id: number) {
    this.router.navigate(['employee','edit', employee_id]);
  }

  showDelete(employee_id: number) {
    this.router.navigate(['employee','delete', employee_id]);
  }

  previousPage() {
    if (this.sort){
      this.employeeService.sortPage(--this.page).subscribe(next=> {
        this.employeeArr= next;
      })
    }else {
      this.employeeService.paginator(--this.page).subscribe(next=> this.employeeArr= next);
    }
  }

  nextPage() {
    if (this.sort){
      this.employeeService.sortPage(++this.page).subscribe(next=> {
        this.employeeArr= next;
      })
    }else {
      this.employeeService.paginator(++this.page).subscribe(next=> this.employeeArr= next);
    }
  }

  sortPage() {
    if (this.sort === false){
      this.employeeService.sortPage(this.page).subscribe(next=> {
        this.sort = true;
        this.employeeArr= next;
      })
    }else {
      this.sort = false;
      this.employeeService.paginator(this.page).subscribe(next=> this.employeeArr= next);
    }
  }

  searchName(value: string) {
    this.employeeService.findByName(value).subscribe(next => this.employeeArr = next)
  }
}
