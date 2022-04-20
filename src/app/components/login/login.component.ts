import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    this.loginForm = this.formbuilder.group(
      {
        userEmail:['', [Validators.required, Validators.email]],
        userPassword:['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        deviceInfo: this.formbuilder.group({
          deviceId: [""],
          deviceType: [""],
          notificationToken: [""]
        })

      }
    )
  }

  get UserEmail() {
    return this.loginForm.get('userEmail');
  }

  get UserPassword() {
    return this.loginForm.get('userPassword');
  }

  ngOnInit(): void {
    this.loginForm.get('userEmail')?.valueChanges.subscribe(
      value => console.log(value)
    )
    this.loginForm.get('userPassword')?.valueChanges.subscribe(
      value => console.log(value)
    )  
  }



  
  

}
