import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AttachService} from "../../case-service/contract/attach.service";
import {ContractAttachService} from "../../case-service/contract/contract-attach.service";
import {Attach} from "../attach";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Contract} from "../contract";
import {ContractService} from "../../case-service/contract/contract.service";

@Component({
  selector: 'app-add-attach',
  templateUrl: './add-attach.component.html',
  styleUrls: ['./add-attach.component.css']
})
export class AddAttachComponent implements OnInit {
  attachArr: Attach[];
  attachSelect: Attach[] = [];
  quantitySelect: number[] = [];
  contractObj: Contract;

  contractAttachForm: FormGroup = new FormGroup({
    contract: new FormControl(),
    service_attach: new FormControl(),
    quantity: new FormControl()
  })
  constructor(private router: Router, private attachService: AttachService, private activeRouter: ActivatedRoute,
              private contractAttachService: ContractAttachService, private contractService: ContractService) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(paramMap => {
      const idContract = +paramMap.get('id');
      this.contractService.findById(idContract).subscribe(next => {
        this.contractObj = next;
        // console.log(next + "AFter");
        this.contractAttachForm.get('contract').setValue(this.contractObj);
      });
    })
    this.attachService.getAll().subscribe(next => this.attachArr = next);
    // this.contractService.getAll().subscribe(next => this.contractArr = next);

  }

  onCreate() {
    this.contractAttachForm.get('service_attach').setValue(this.attachSelect);
    this.contractAttachForm.get('quantity').setValue(this.quantitySelect);
    // console.log(this.contractAttachForm.value);
    this.contractAttachService.createContractAttach(this.contractAttachForm.value).subscribe(next => {
      // console.log(next);
      this.router.navigateByUrl('/contractAttach');
    })
  }


  onCheck(items: Attach, check: any) {
   if (check === true){
     this.attachSelect.push(items);
   }else {
     const findIndex = this.attachSelect.findIndex(value => value.id == items.id);
      this.attachSelect.splice(findIndex);
   }
  }


  onInput(value: any) {
    this.quantitySelect.push(value)
  }
}
