import { Injectable} from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAbout } from '../components/card/about';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { IEducation} from "../components/card/education";
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, of, throwError} from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  allEducation!: IEducation[];
  allWorkExperience!: IWorkexperience[];
  allAbout!: IAbout[];
  allSoftSkill!: ISkill[];
  allHardSkill!: ISkill[];
  allProjects!: IProject[];

  loggedUser = this.tokenStorageService.getUser();

  private dataServiceUrl: string = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient, private  tokenStorageService: TokenStorageService) {}

  getPerson(): Observable<any>{
    return this.http.get(this.dataServiceUrl+ this.loggedUser+'/person').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAllEducations(): Observable<IEducation[]>{
    return this.http.get<IEducation[]>(this.dataServiceUrl+ this.loggedUser +'/education').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allEducation = data),
      catchError(this.handleError)
    );
  }

  getEducation(educationId: number):Observable<IEducation> {
    if (this.allEducation == null ){
      this.getAllEducations().subscribe({
        next: educations => {
          return of(educations[educationId]);
        }
      })
    }
    if (educationId < this.allEducation.length ) {
      return of(this.allEducation[educationId]);
    }
    return EMPTY;
  }

  getAllAbouts(): Observable<IAbout[]> {
    if (this.allAbout != null ) {
      return of(this.allAbout);
    }
    return this.http.get<IAbout[]>(this.dataServiceUrl+ this.loggedUser +'/about').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allAbout = data),
      catchError(this.handleError)
    );
  }

  getAbout(aboutId: number):Observable<IAbout> {
    if (this.allAbout == null ){
      this.getAllAbouts().subscribe({
        next: abouts => {
          return of(abouts[aboutId]);
        }
      })
    }
    if (aboutId < this.allAbout.length ) {
      return of(this.allAbout[aboutId]);
    }
    return EMPTY;
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

  getAllWorkExperiences(): Observable<IWorkexperience[]> {
    if (this.allWorkExperience != null ) {
      return of(this.allWorkExperience);
    }
    return this.http.get<IWorkexperience[]>(this.dataServiceUrl+ this.loggedUser +'/workexperience').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allWorkExperience = data),
      catchError(this.handleError)
    );
  }

  getWorkExperience(workExperienceId: number):Observable<IWorkexperience> {
    if (this.allWorkExperience == null ){
      this.getAllWorkExperiences().subscribe({
        next: workExperiences => {
          return of(workExperiences[workExperienceId]);
        }
      })
    }
    if (workExperienceId < this.allWorkExperience.length ) {
      return of(this.allWorkExperience[workExperienceId]);
    }
    return EMPTY;
  }

  getAllSoftSkills(): Observable<ISkill[]> {
    if (this.allSoftSkill != null ) {
      return of(this.allSoftSkill);
    }
    return this.http.get<ISkill[]>(this.dataServiceUrl+ this.loggedUser +'/softskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allSoftSkill = data),
      catchError(this.handleError)
    );
  }

  getSoftSkill(SoftSkillId: number):Observable<ISkill> {
    if (this.allSoftSkill == null ){
      this.getAllSoftSkills().subscribe({
        next: softskills => {
          return of(softskills[SoftSkillId]);
        }
      })
    }
    if (SoftSkillId < this.allSoftSkill.length ) {
      return of(this.allSoftSkill[SoftSkillId]);
    }
    return EMPTY;
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

  getAllHardSkills(): Observable<ISkill[]> {
    if (this.allHardSkill != null ) {
      return of(this.allHardSkill);
    }
    return this.http.get<ISkill[]>(this.dataServiceUrl+ this.loggedUser +'/hardskill').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allHardSkill = data),
      catchError(this.handleError)
    );
  }

  getHardSkill(HardSkillId: number):Observable<ISkill> {
    if (this.allHardSkill == null ){
      this.getAllHardSkills().subscribe({
        next: hardskills => {
          return of(hardskills[HardSkillId]);
        }
      })
    }
    if (HardSkillId < this.allHardSkill.length ) {
      return of(this.allHardSkill[HardSkillId]);
    }
    return EMPTY;
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

  getAllProjects(): Observable<IProject[]> {
    if (this.allProjects != null ) {
      return of(this.allProjects);
    }
    return this.http.get<IProject[]>(this.dataServiceUrl+ this.loggedUser +'/project').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allProjects = data),
      catchError(this.handleError)
    );
  }

  getProject(ProjectId: number):Observable<IProject> {
    if (this.allProjects == null ){
      this.getAllProjects().subscribe({
        next: projects => {
          return of(projects[ProjectId]);
        }
      })
    }
    if (ProjectId < this.allProjects.length ) {
      return of(this.allProjects[ProjectId]);
    }
    return EMPTY;
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
