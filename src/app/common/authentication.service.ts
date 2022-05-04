import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private AUTH_URL: string = 'http://localhost:8080/api/login';
  private REG_URL: string = 'http://localhost:8080/api/register';
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

  register(username: string, password: string, email: string, name: string, surname: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("username", username);
    params.set("email", email);  
    params.set("password", password);  
    params.set("name", name);
    params.set("surname", surname);
    const httpOptions = { headers: new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post(
      this.REG_URL, 
      params,
      httpOptions);
  }
}
