import { Injectable } from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAboutMe } from '../components/card/aboutme';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private dataServiceUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getEducation(): Observable<any>{
    return this.http.get<IAboutMe[]>(this.dataServiceUrl+'/education').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAboutme(): Observable<IAboutMe[]> {
    return this.http.get<IAboutMe[]>(this.dataServiceUrl+'/about').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getWorkExperience(): Observable<IWorkexperience[]> {
    return this.http.get<IWorkexperience[]>(this.dataServiceUrl+'/workexperience').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSoftSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.dataServiceUrl+'/softskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getHardSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.dataServiceUrl+'/hardskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.dataServiceUrl+'/project').pipe(
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
