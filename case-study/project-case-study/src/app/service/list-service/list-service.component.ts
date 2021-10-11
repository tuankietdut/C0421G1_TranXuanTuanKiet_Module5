import { Component, OnInit } from '@angular/core';
import {ServiceManager} from "../serviceManager";
import {HttpClient} from "@angular/common/http";
import {ServiceManagerService} from "../../case-service/service/service-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceArr: ServiceManager[];
  constructor(private router:Router, private serviceManagerService:ServiceManagerService) { }

  ngOnInit(): void {
    this.serviceManagerService.getAll().subscribe((next) => this.serviceArr = next)
  }

  showEdit(id: number) {
    this.router.navigate(['service','edit',id])
  }
  showDelete(id: number){
    this.router.navigate(['service','delete',id])
  }
}
