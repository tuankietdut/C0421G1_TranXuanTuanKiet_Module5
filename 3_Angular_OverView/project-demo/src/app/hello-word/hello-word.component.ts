import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {
  age =  12;
  fontSize = 14;
  changeFontSize(value){
    // this.fontSize = value;
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
