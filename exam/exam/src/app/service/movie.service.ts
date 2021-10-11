import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interface/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL_MOVIE= "http://localhost:3000/movie"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[] | any>{
    return this.http.get(this.URL_MOVIE);
  }
}
