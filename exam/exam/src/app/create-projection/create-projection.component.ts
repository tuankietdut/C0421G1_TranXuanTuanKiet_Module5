import {Component, Input, OnInit} from '@angular/core';
import {ProjectionService} from "../service/projection.service";
import {MovieService} from "../service/movie.service";
import {Router} from "@angular/router";
import {Movie} from "../interface/movie";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Projection} from "../interface/projection";

@Component({
  selector: 'app-create-projection',
  templateUrl: './create-projection.component.html',
  styleUrls: ['./create-projection.component.css']
})
export class CreateProjectionComponent implements OnInit {
  @Input() idProjectArr: string[] = ["CI-0001", "CI-0002", "CI-0003", "CI-0004", "CI-0005"];
  movieArr: Movie[];
  projectArr: Projection[] = [];
  checkCode: boolean = false;
  errorsCodeLoop: string;
  projectionForm: FormGroup = new FormGroup({
    codeProject: new FormControl('',Validators.compose([Validators.required, Validators.pattern('^(CI-)[0-9]{4}$')])),
    movie: new FormControl('',Validators.compose([Validators.required])),
    startDay: new FormControl('',Validators.compose([Validators.required, this.customDate])),
    quantity: new FormControl(',', Validators.compose([Validators.required, Validators.min(1)])),
  })
  customCodeProject(items: AbstractControl){
    const idProject = items.value;
    let findIndex: number = -1;
    try {
       findIndex = this.idProjectArr.findIndex(value => value == idProject)
    }catch (e) {
      console.log(e.toString());
      console.log("Errors dong 28")
    }
    if (findIndex == -1){
      return null;
    }else {
      return {code_errors : true}
    }
  }

  customDate(items: AbstractControl){
    const stringDate = new Date(items.value);
    const currentDate = new Date();
    if (stringDate.getDate() < currentDate.getDate() || stringDate.getMonth() < currentDate.getMonth() || stringDate.getFullYear() < currentDate.getFullYear() ){
      return {errors_date : true};
    }else {
      return null;
    }
  }

  constructor(private projectService: ProjectionService, private movieService: MovieService,
                private router: Router) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe(next => this.movieArr = next);
  }

  onCreate(){
    if (this.projectionForm.valid && this.checkCode){
      this.projectService.createProjection(this.projectionForm.value).subscribe(next => this.router.navigateByUrl('/projection'))
    }
  }
  validationMessage = {
    codeProject:[
      {type: "required", message: "Bat buoc nhap"},
      {type: "pattern", message: "Nhap dung dinh dang CI-XXXX"},
      {type: "code_errors", message: "Da ton tai Code"}
    ],
    startDay: [
      {type: "required", message: "Bat buoc nhap"},
      {type: "errors_date", message: "Lon hon hoac bang ngay hien tai"},
    ],
    quantity: [
      {type: "required", message: "Bat buoc nhap"},
      {type: "min", message: "Lon hon 0"}
    ]
  }

  inputCode(items: string) {
    console.log(items);
    this.projectService.getAll().subscribe(next =>{
      this.projectArr = next;
      console.log(this.projectArr.findIndex(value => value.codeProject == items));
      if (this.projectArr.findIndex(value => value.codeProject == items) == -1){
        this.checkCode = true;
        this.errorsCodeLoop = '';
      }else {
        this.checkCode = false;
        this.errorsCodeLoop = "Ma code bi trung";
      }
    })
  }
}
