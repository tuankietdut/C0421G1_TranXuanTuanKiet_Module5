import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class PickColorComponent implements OnInit {
  color1?: string ;
  color2?: string;
  color3?: string;
  pickColor(value1, value2, value3){
    this.color1 = value1;
    this.color2 = value2;
    this.color3 = value3;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
