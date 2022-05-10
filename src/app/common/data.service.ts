import { Injectable} from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAbout } from '../components/card/about';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { IEducation} from "../components/card/education";
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  loggedUser = this.tokenStorageService.getUser();

  private dataServiceUrl: string = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient, private  tokenStorageService: TokenStorageService) {}

  getPerson(): Observable<any>{
    return this.http.get(this.dataServiceUrl+ this.loggedUser+'/person').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getEducation(): Observable<IEducation[]>{
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

  postAbout(about: string): Observable<IAbout>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("about", about);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<IAbout>(
      this.dataServiceUrl + this.loggedUser +'/about',
      params,
      httpOptions);
  }

  deleteAbout(dataId: number): Observable<IAbout>  {
    return this.http.delete<IAbout>(this.dataServiceUrl + this.loggedUser +'/about/' + dataId).pipe(
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

  postSoftSkill(softskill: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("softskill", softskill);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<ISkill>(
      this.dataServiceUrl + this.loggedUser +'/softskill',
      params,
      httpOptions);
  }

  deleteSoftSkill(dataId: number): Observable<ISkill>  {
    return this.http.delete<ISkill>(this.dataServiceUrl + this.loggedUser +'/softskill/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getHardSkill(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.dataServiceUrl+ this.loggedUser +'/hardskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postHardSkill(hardskill: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("hardskill", hardskill);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<ISkill>(
      this.dataServiceUrl + this.loggedUser +'/hardskill',
      params,
      httpOptions);
  }

  deleteHardSkill(dataId: number): Observable<ISkill>  {
    return this.http.delete<ISkill>(this.dataServiceUrl + this.loggedUser +'/hardskill/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.dataServiceUrl+ this.loggedUser +'/project').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postProjects(projectname: string, projectdetails: string, projecturl: string): Observable<IProject>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("name", projectname);
    params.set("details", projectdetails);
    params.set("url", projecturl);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<IProject>(
      this.dataServiceUrl + this.loggedUser +'/project',
      params,
      httpOptions);
  }

  deleteProject(dataId: number): Observable<unknown>  {
    return this.http.delete<IProject>(this.dataServiceUrl + this.loggedUser +'/project/' + dataId).pipe(
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
