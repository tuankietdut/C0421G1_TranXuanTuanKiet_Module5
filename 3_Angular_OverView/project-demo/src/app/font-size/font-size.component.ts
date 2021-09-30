import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  value: number = 15;

  changeFontSize(value){
    this.value = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
