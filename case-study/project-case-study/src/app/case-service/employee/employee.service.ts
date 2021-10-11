import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL_EMPLOYEE = "http://localhost:3000/employee"
  constructor(private http: HttpClient) { }
  getAll(): Observable<Employee[] | any>{
    return  this.http.get(this.URL_EMPLOYEE);
  }
  findById(id: number){
    return  this.http.get(this.URL_EMPLOYEE + "/" + id);
  }
  createEmployee(employee: Employee){
    return  this.http.post(this.URL_EMPLOYEE, employee);
  }
  updateEmployee(employee: Employee){
    return  this.http.put(this.URL_EMPLOYEE + "/"+ employee.id, employee);
  }
  deleteEmployee(id: number){
    return  this.http.delete(this.URL_EMPLOYEE + "/" + id);
  }
  paginator(numberPage: number): Observable<Employee[] | any>{
    return this.http.get(this.URL_EMPLOYEE+'?_page='+numberPage + '&_limit=2');
  }
  sortPage(numberPage: number):Observable<Employee[] | any>{
    return this.http.get(this.URL_EMPLOYEE+'?_page='+numberPage + '&_limit=2'+ '&_sort=id' + '&_order=desc');
  }
  findByName(nameEmployee: string):Observable<Employee[] | any>{
    return this.http.get(this.URL_EMPLOYEE+'?employee_name_like='+nameEmployee);
  }
}
