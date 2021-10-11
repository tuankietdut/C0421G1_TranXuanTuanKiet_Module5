import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Attach} from "../../contract/attach";

@Injectable({
  providedIn: 'root'
})
export class AttachService {
  private URL_ATTACH = "http://localhost:3000/attach"
  constructor(private http: HttpClient) { }
  getAll(): Observable<any| Attach[]>{
    return this.http.get(this.URL_ATTACH);
  }
}
