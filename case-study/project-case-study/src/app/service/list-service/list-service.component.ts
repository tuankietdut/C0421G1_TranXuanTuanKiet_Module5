import { Component, OnInit } from '@angular/core';
import {ServiceManager} from "../serviceManager";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceArr?: ServiceManager[] = [
    {service_id: 1, service_name: "DV-0001", service_area: 50, service_cost: 450000, service_max_people: 10, standard_room: "Phong 5*", description: "Xem phim, bể bơi, ăn uống tùy thích",
      pool_area: 35, number_floors: 3, service_type: {id: 1, name: "Villa"}},
    {service_id: 2, service_name: "DV-0002", service_area: 65, service_cost: 600000, service_max_people: 10, standard_room: "Phong 5*", description: "Xem phim, bể bơi, ăn uống tùy thích",
      pool_area: 20, number_floors: 3, service_type: {id: 1, name: "Villa"}},
    {service_id: 3, service_name: "DV-0003", service_area: 40, service_cost: 250000, service_max_people: 7, standard_room: "Phong 3*", description: "Xem phim, be boi",
      pool_area: 0, number_floors: 2, service_type: {id: 2, name: "House"}}
  ]
  serviceObj: ServiceManager;
  constructor() { }

  ngOnInit(): void {
  }

  showEdit(items: ServiceManager) {
    this.serviceObj = items;
  }
}
