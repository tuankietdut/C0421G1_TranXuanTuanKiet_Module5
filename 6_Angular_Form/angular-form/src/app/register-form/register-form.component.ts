import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup | undefined;
  country = ["Viet Nam", "Lao", "Campuchia", "Myanmar"]
  constructor() {
     this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.minLength(6), Validators.required]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required, Validators.min(18)]),
      gender: new FormControl('0',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
    }, [this.comparePassWord])
  }

  ngOnInit(): void {
  }

  comparePassWord(variable: AbstractControl){
    const pass = variable.value;
    return (pass.password === pass.confirmPassword)? null: {passwordNotMatch: true};
  }

  register() {
    if (this.registerForm.valid){
      console.log(this.registerForm.value);
    }else {
      console.log(this.registerForm.hasError('passwordNotMatch'))
    }
  }
}
