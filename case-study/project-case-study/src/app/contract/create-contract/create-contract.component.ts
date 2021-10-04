import { Component, OnInit } from '@angular/core';
import {Customer} from "../../customer/customer";
import {Employee} from "../../employee/employee";
import {ServiceManager} from "../../service/serviceManager";
import {ServiceAttach} from "../service-attach";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  customerArr: Customer[] = [
    {customer_id: 1,customer_code: "KH-0001" , customer_name: "Quan vu", customer_birthday: "10/08/2000", customer_gender: 1, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 2,customer_code: "KH-0002", customer_name: "Luu Bi", customer_birthday: "10/08/2005", customer_gender: 0, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 3, customer_code: "KH-0003",  customer_name: "Truong Phi", customer_birthday: "10/08/2001", customer_gender: 1, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}},
    {customer_id: 4, customer_code: "KH-0004",  customer_name: "Lu Bo", customer_birthday: "10/08/2010", customer_gender: 2, customer_idCard: "123452187", customer_phone: "0905211121",
      customer_email: "quanvu@gmail.com", customer_address: "Da Nang", customer_type: {id:1, name: "Diamond"}}
  ]
  employeeArr: Employee[] = [
    {employee_id: 1, employee_name: "Tran Van Chien", employee_birthday: "10/08/2001", employee_id_card:"KH-0001", employee_salary: 5000, employee_phone:"0123451712", employee_email:"chien@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 2, employee_name: "Quan vu", employee_birthday: "10/08/2002", employee_id_card:"KH-0002", employee_salary: 8000, employee_phone:"0123451712", employee_email:"quanvu@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 3, employee_name: "Luu Bi", employee_birthday: "10/08/2000", employee_id_card:"KH-0003", employee_salary: 1000, employee_phone:"0123451712", employee_email:"luubi@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}},
    {employee_id: 4, employee_name: "Tao thao ", employee_birthday: "10/08/1850", employee_id_card:"KH-0004", employee_salary: 6000, employee_phone:"0123451712", employee_email:"taothao@gmail.com",
      employee_address:"Da Nang", position_id:{id:1, name:"Le tan"}, education_id:{id:1, name:"Trung cap"}, division_id: {id:1, name:"Sale Makerting"}}
  ]
  serviceArr: ServiceManager[] = [
    {service_id: 1, service_name: "DV-0001", service_area: 50, service_cost: 450000, service_max_people: 10, standard_room: "Phong 5*", description: "Xem phim, bể bơi, ăn uống tùy thích",
      pool_area: 35, number_floors: 3, service_type: {id: 1, name: "Villa"}},
    {service_id: 2, service_name: "DV-0002", service_area: 65, service_cost: 600000, service_max_people: 10, standard_room: "Phong 5*", description: "Xem phim, bể bơi, ăn uống tùy thích",
      pool_area: 20, number_floors: 3, service_type: {id: 1, name: "Villa"}},
    {service_id: 3, service_name: "DV-0003", service_area: 40, service_cost: 250000, service_max_people: 7, standard_room: "Phong 3*", description: "Xem phim, be boi",
      pool_area: 0, number_floors: 2, service_type: {id: 2, name: "House"}}
  ]
  attach_service_arr: ServiceAttach[] = [
    {attach_service_id: 1, attach_service_name: "Massage", attach_service_cost: 12, attach_service_unit: 1, attach_service_status: "available"},
    {attach_service_id: 2, attach_service_name: "Karaoke", attach_service_cost: 10, attach_service_unit: 1, attach_service_status: "available"},
    {attach_service_id: 3, attach_service_name: "Food", attach_service_cost: 5, attach_service_unit: 1, attach_service_status: "available"},
    {attach_service_id: 4, attach_service_name: "Water", attach_service_cost: 3, attach_service_unit: 1, attach_service_status: "available"},
    {attach_service_id: 4, attach_service_name: "Discovery Resort", attach_service_cost: 20, attach_service_unit: 1, attach_service_status: "available"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
