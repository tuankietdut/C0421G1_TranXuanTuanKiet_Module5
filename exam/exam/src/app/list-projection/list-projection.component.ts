import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProjectionService} from "../service/projection.service";
import {Projection} from "../interface/projection";
import {MatDialog} from "@angular/material/dialog";
import {DeleteProjectionComponent} from "../delete-projection/delete-projection.component";

@Component({
  selector: 'app-list-projection',
  templateUrl: './list-projection.component.html',
  styleUrls: ['./list-projection.component.css']
})
export class ListProjectionComponent implements OnInit {
  projectArr: Projection[];
  projectObj: Projection;
  constructor(private router: Router, private projectService: ProjectionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(next => this.projectArr = next);
  }

  showModal(items: Projection) {
    let dialogRef =  this.dialog.open(DeleteProjectionComponent, {data: {project: items}});
    dialogRef.afterClosed().subscribe((next) => this.ngOnInit());
  }

  onDelete() {
    this.dialog.open(DeleteProjectionComponent);
    // this.projectService.deleteById(this.projectObj.id).subscribe(next => {
    //   // alert("Delete Done")
    //   let cancelButton = document.getElementById("cancel");
    //   cancelButton.click();
    //   this.ngOnInit();
    // });
  }
}
