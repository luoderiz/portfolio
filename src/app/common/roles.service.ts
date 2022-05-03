import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root'
})

export class RolesService {
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserEditContent(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getAdminContent(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
