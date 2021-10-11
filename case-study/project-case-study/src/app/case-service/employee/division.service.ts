import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../employee/employee";
import {Division} from "../../employee/division";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  private URL_DIVISION = "http://localhost:3000/division";
  constructor(private http: HttpClient) { }
  getAll(): Observable<Division[] | any>{
    return  this.http.get(this.URL_DIVISION);
  }
}
