import { Component, OnInit } from '@angular/core';
import {ServiceType} from "../service-type";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  serviceTypeArr: ServiceType[] = [
    {id: 1, name: "Villa"},
    {id: 2, name: "House"},
    {id: 3, name: "Room"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
