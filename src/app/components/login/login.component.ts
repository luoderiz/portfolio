import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login: Login = new Login();
  
  ngOnInit(): void {
     this.loginForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12),
      ]),
      userPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      rememberMe: new FormControl(Boolean)
    });

  this.loginForm.get('userName')?.valueChanges.subscribe(
    value => console.log(value)
  )
  this.loginForm.get('userPassword')?.valueChanges.subscribe(
    value => console.log(value)
  ) 
  }

  save(){}

  constructor(private formbuilder: FormBuilder) { }
}
