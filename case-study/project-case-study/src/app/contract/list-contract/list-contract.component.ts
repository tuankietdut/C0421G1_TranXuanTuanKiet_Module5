import {Component, OnInit} from '@angular/core';
import {ContractAttach} from "../contract-attach";
import {Contract} from "../contract";
import {ContractService} from "../../case-service/contract/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractArr: Contract[];

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(next => this.contractArr = next);
  }

  addAttach(id: number) {
    this.router.navigate(['contract','attach', id])
  }
}
