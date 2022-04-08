import { Injectable } from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAboutMe } from '../components/card/aboutme';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private workexperienceUrl: string = 'api/workexperience.json';
  private aboutmeUrl: string = 'api/aboutme.json';
  private softSkillUrl: string = 'api/softskill.json';
  private hardSkillUrl: string = 'api/hardskill.json';
  private projectsUrl: string = 'api/projects.json';

  constructor(private http: HttpClient) {}

  getWorkExperience(): Observable<IWorkexperience[]> {
    return this.http.get<IWorkexperience[]>(this.workexperienceUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAboutme(): Observable<IAboutMe[]> {
    return this.http.get<IAboutMe[]>(this.aboutmeUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSoftSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.softSkillUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getHardSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.hardSkillUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl).pipe(
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
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
