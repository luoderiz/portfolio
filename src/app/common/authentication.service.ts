import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private AUTH_URL: string = environment.apiUrl + 'login';
  private REG_URL: string =  environment.apiUrl + 'register';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService, private route: Router) { }

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

  register(name: string, surname: string, email: string, username: string, password: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("name", name);
    params.set("surname", surname);
    params.set("mail", email);
    params.set("username", username);
    params.set("password", password);
    const httpOptions = { headers: new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post(
      this.REG_URL,
      params,
      httpOptions);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.route.navigate(['/welcome']);
  }
}
