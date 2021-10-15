import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../service/car.service";
import {PlaceService} from "../../service/place.service";
import {Place} from "../../interface/place";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  placeArr: Place[];
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



  constructor(private router: Router,
              private carService: CarService, private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(next=> {
      this.placeArr = next;
    })
  }

  onCreate() {
    console.log(this.carForm.value);
    try {
      this.carService.createCar(this.carForm.value).subscribe(next => {
        console.log(next);
        this.router.navigateByUrl("");
      });
    }catch (e) {
      console.log(e.toString())
    }
  }
}
