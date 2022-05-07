import {Injectable} from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAbout } from '../components/card/about';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import {IEducation} from "../components/card/education";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  loggedUser = this.tokenStorageService.getUser();

  private dataServiceUrl: string = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient, private  tokenStorageService: TokenStorageService) {}

  getEducation(): Observable<any>{
    return this.http.get<IEducation[]>(this.dataServiceUrl+ this.loggedUser +'/education').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAbout(): Observable<IAbout[]> {
    return this.http.get<IAbout[]>(this.dataServiceUrl+ this.loggedUser +'/about').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getWorkExperience(): Observable<IWorkexperience[]> {
    return this.http.get<IWorkexperience[]>(this.dataServiceUrl+ this.loggedUser +'/workexperience').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSoftSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.dataServiceUrl+ this.loggedUser +'/softskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getHardSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.dataServiceUrl+ this.loggedUser +'/hardskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.dataServiceUrl+ this.loggedUser +'/project').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message} `;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
