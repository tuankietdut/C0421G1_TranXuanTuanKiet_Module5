import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Projection} from "../interface/projection";
import {Movie} from "../interface/movie";
import {ProjectionService} from "../service/projection.service";
import {log} from "util";

@Component({
  selector: 'app-delete-projection',
  templateUrl: './delete-projection.component.html',
  styleUrls: ['./delete-projection.component.css']
})
export class DeleteProjectionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectionService) {

  }

  ngOnInit(): void {
  }


  onDelete() {
    console.log(this.data);
    this.projectService.deleteById(this.data.project.id).subscribe(next => console.log("Success"))
  }
}
