import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Projection} from "../interface/projection";

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
  private URL_PROJECTION = "http://localhost:3000/projection"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Projection[] |any>{
    return this.http.get(this.URL_PROJECTION);
  }
  createProjection(items: Projection){
    return this.http.post(this.URL_PROJECTION,items);
  }
  deleteById(id: number){
    return this.http.delete(this.URL_PROJECTION + "/" + id);
  }
}
