import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/common/token-storage.service';
import { AuthenticationService } from 'src/app/common/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(private formbuilder: FormBuilder, private authService: AuthenticationService, private tokenStorage: TokenStorageService, private route: Router) {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }
  onSubmit(): void {
    this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.route.navigate(['/welcome']);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

get UserName() {
  return this.loginForm.get('username');
}

get UserPassword() {
  return this.loginForm.get('password');
}

  ngOnInit(): void {
    this.loginForm.get('username')?.valueChanges.subscribe();
    this.loginForm.get('password')?.valueChanges.subscribe();
  }
}
