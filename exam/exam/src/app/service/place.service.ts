import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../interface/place";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private URL_PLACE= "http://localhost:8080/car/place"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[] | any>{
    return this.http.get(this.URL_PLACE);
  }

}
