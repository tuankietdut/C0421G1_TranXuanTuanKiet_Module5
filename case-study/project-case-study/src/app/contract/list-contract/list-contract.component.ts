import {Component, OnInit} from '@angular/core';
import {ContractServiceAttach} from "../contract-service-attach";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contract_service_arr: ContractServiceAttach[] = [
    {
      contract_service_id: 1,
      contract: {
        contract_id: 1,
        contract_start_day: "10/10/2000",
        contract_end_day: "15/10/2000",
        contract_deposit: 15,
        contract_total_money: 100,
        customer: {
          customer_id: 1,
          customer_code: "KH-0001",
          customer_name: "Quan vu",
          customer_birthday: "10/08/2000",
          customer_gender: 1,
          customer_idCard: "123452187",
          customer_phone: "0905211121",
          customer_email: "quanvu@gmail.com",
          customer_address: "Da Nang",
          customer_type: {id: 1, name: "Diamond"}
        },
        employee: {
          employee_id: 1,
          employee_name: "Tran Van Chien",
          employee_birthday: "10/08/2001",
          employee_id_card: "KH-0001",
          employee_salary: 5000,
          employee_phone: "0123451712",
          employee_email: "chien@gmail.com",
          employee_address: "Da Nang",
          position_id: {id: 1, name: "Le tan"},
          education_id: {id: 1, name: "Trung cap"},
          division_id: {id: 1, name: "Sale Makerting"}
        },
        service: {
          service_id: 1,
          service_name: "DV-0001",
          service_area: 50,
          service_cost: 450000,
          service_max_people: 10,
          standard_room: "Phong 5*",
          description: "Xem phim, bể bơi, ăn uống tùy thích",
          pool_area: 35,
          number_floors: 3,
          service_type: {id: 1, name: "Villa"}
        }
      },
      service_attach: [{
        attach_service_id: 1,
        attach_service_name: "Massage",
        attach_service_cost: 12,
        attach_service_unit: 1,
        attach_service_status: "available"
      },
        {
          attach_service_id: 2,
          attach_service_name: "Karaoke",
          attach_service_cost: 10,
          attach_service_unit: 1,
          attach_service_status: "available"
        }]
      , quantity: [2, 1]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
