import { Component, OnInit } from '@angular/core';
import {ServiceDateService} from '../../service/service-date.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateService: ServiceDateService) { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.output = this.dateService.getDiffToNow(value);
  }
}
