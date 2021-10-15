import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CarService} from "../../service/car.service";
import {Car} from "../../interface/car";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  carArr: Car[];
  carObj: Car;
  totalPage: number;
  pageNumber: number;
  constructor(private router: Router, private carService: CarService , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carService.getAllWithPage().subscribe(next => {
      console.log(next);
      this.totalPage = next.totalPages;
      this.pageNumber = next.number;
      this.carArr = next.content;
    });
  }

  showEdit(id: number) {
    this.router.navigate(['car','edit',id]);
  }

  showModal(items: Car) {
    this.carObj = items;
  }

  onDelete() {
    this.carService.deleteById(this.carObj.id).subscribe(next => {
      let ref = document.getElementById("cancel");
      ref.click();
      this.ngOnInit();
    })
  }

  previousPage() {
    this.carService.getAllWithPage(--this.pageNumber).subscribe(next => {
      console.log(next);
      this.carArr = next.content;
    })

  }

  nextPage() {
    this.carService.getAllWithPage(++this.pageNumber).subscribe(next => {
      console.log(next);
      this.carArr = next.content;
    })
  }
}
