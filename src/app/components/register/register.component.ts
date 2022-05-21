import { Component, OnInit } from '@angular/core';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../common/authentication.service";
import {TokenStorageService} from "../../common/token-storage.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ErrormessageComponent} from "./errormessage/errormessage.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faAddressCard = faAddressCard;
  registerForm!: FormGroup;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private formbuilder: FormBuilder, private authService: AuthenticationService, private tokenStorage: TokenStorageService, private route: Router, private modalService: NgbModal) {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      surname: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    this.registerForm.get('name')?.valueChanges.subscribe();
    this.registerForm.get('surname')?.valueChanges.subscribe();
    this.registerForm.get('email')?.valueChanges.subscribe();
    this.registerForm.get('username')?.valueChanges.subscribe();
    this.registerForm.get('password')?.valueChanges.subscribe();
  }

  onSubmit(): void {
    this.authService.register(this.registerForm.get('name')?.value, this.registerForm.get('surname')?.value, this.registerForm.get('email')?.value, this.registerForm.get('username')?.value, this.registerForm.get('password')?.value).subscribe({
      next: data => {
        this.route.navigate(['/login']).then(() => window.location.reload());
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
        this.modalService.open(ErrormessageComponent);
      }
    });
  }

  open() {
    const modalRef = this.modalService.open(ErrormessageComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  get UserName() {
    return this.registerForm.get('name');
  }
  get UserSurname() {
    return this.registerForm.get('surname');
  }
  get UserEMail() {
    return this.registerForm.get('email');
  }
  get UserUsername() {
    return this.registerForm.get('username');
  }
  get UserPassword() {
    return this.registerForm.get('password');
  }
}
