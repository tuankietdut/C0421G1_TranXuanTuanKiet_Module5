import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-project';
  count: number;
  rating: number;

  handleCount(value: number) {
    this.count = value;
  }

  onPickRating(value: number) {
    this.rating = value;
  }
}
