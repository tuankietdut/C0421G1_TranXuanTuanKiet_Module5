import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Place} from "../../interface/place";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../service/car.service";
import {PlaceService} from "../../service/place.service";
import {Car} from "../../interface/car";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  carForm: FormGroup = new FormGroup({
    id: new FormControl(),
    typeCar: new FormControl('',Validators.compose([Validators.required])),
    nameGarage: new FormControl('',Validators.compose([Validators.required])),
    placeFrom: new FormControl('',Validators.compose([Validators.required])),
    placeTo: new FormControl('',Validators.compose([Validators.required])),
    phone: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^((090)|(093)|(097))[\\d]{7}$")])),
    email: new FormControl('',Validators.compose([Validators.required, Validators.pattern("^[\\w]+\\@[\\w]+\\.[\\w]+$")])),
    timeStart: new FormControl('',Validators.compose([Validators.required, Validators.min(5)])),
    timeEnd: new FormControl('',Validators.compose([Validators.required, this.validateTimeEnd])),
  })
  carObj: Car;
  placeArr: Place[];
  messageErr: string;
  validateTimeEnd(item: AbstractControl){
    const items = item.value;
    let hour = Number(items.slice(0,2));
    let minius = Number(items.slice(3,5));
    if (hour == 12){
      return {"timeEnd": true};
    }
    if (hour > 23){
      return {"timeEnd": true};
    }
    if (hour ==23 && minius >0){
      return {"timeEnd": true}
    }
    return null;
  }
  constructor(private router: Router, private activeRouter: ActivatedRoute,
              private carService: CarService, private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(next =>{
      this.placeArr = next;
      this.activeRouter.paramMap.subscribe(paramMap =>{
        const idCar = + paramMap.get('id');
        this.carService.findCarById(idCar).subscribe(next => {
          this.carObj = next;
          this.carForm.setValue(this.carObj);
        })
      })
    })
  }

  onUpdate() {
    if (this.carForm.valid){
      this.carService.updateCar(this.carForm.value).subscribe(next =>{
        this.router.navigateByUrl('');
      });
    }else {
      this.messageErr = "Co field ko thoa man"
    }
    console.log(this.carForm.value);
  }

}
