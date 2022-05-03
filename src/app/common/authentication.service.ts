/*
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private AUTH_URL: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("username", username);
    params.set("password", password);  
    const httpOptions = { headers: new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post(
      this.AUTH_URL, 
      params,
      httpOptions);
  }

  /* todo: add registry 

  register(username: string, email: string, password: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("username", username);
    params.set("email", email);  
    params.set("password", password);  
    const httpOptions = { headers: new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post(
      this.AUTH_URL, 
      params,
      httpOptions);
  }
  */
}
