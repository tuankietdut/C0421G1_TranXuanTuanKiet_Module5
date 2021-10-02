import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  constructor() {
  }

  tenNumber = 15;
  variable;
  @Output() countDown: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    this.countDown.emit(this.tenNumber);
  }

  onCountDown() {
    this.variable = setInterval(() => {
      this.tenNumber--;
      this.countDown.emit(this.tenNumber);
      if (this.tenNumber === 0) {
        clearInterval(this.variable);
      }
    }, 1000);
  }
  onStop(){
    clearInterval(this.variable);
  }
  onReset(){
    clearInterval(this.variable);
    this.tenNumber = 15;
    this.countDown.emit(this.tenNumber);
  }

}
