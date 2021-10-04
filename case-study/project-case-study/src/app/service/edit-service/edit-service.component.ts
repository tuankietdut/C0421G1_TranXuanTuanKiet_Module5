import { Component, OnInit } from '@angular/core';
import {ServiceType} from "../service-type";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  serviceTypeArr: ServiceType[] = [
    {id: 1, name: "Villa"},
    {id: 2, name: "House"},
    {id: 3, name: "Room"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
