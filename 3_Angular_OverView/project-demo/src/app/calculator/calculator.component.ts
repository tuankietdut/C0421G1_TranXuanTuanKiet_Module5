import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOne: number;
  numberTwo: number;
  result: any;
  //Test String
  test1: string = "1";
  test2: string = "5";

  getNumberOne(value){
   this.numberOne = value;
  }
  getNumberTwo(value){
    this.numberTwo = value;
  }

  showResult(value){
    switch (value) {
      case "+":
        this.result = Number(this.numberOne) + Number(this.numberTwo);
        //Test String
        // this.result = this.test1 - this.test2;
        break;
      case "-":
        this.result = this.numberOne - this.numberTwo;
        break;
      case "*":
        this.result = this.numberOne * this.numberTwo;
        break;
      default:
        if (this.numberTwo == 0){
          this.result ="Infinity";
          break;
        }
        this.result = this.numberOne / this.numberTwo;
        break;

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
