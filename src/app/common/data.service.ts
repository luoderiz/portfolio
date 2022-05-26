import { Injectable} from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IAbout } from '../components/card/about';
import { ISkill } from '../components/card/skill';
import { IProject } from '../components/card/project';
import { IEducation} from "../components/card/education";
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, map, Observable, of, throwError} from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { TokenStorageService} from "./token-storage.service";
import {IInstitution} from "../components/card/institution";
import {ICity} from "../components/card/city";
import {IPerson} from "../components/header/person";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  person!: IPerson;
  allEducation!: IEducation[];
  allWorkExperience!: IWorkexperience[];
  allAbout!: IAbout[];
  allSoftSkill!: ISkill[];
  allHardSkill!: ISkill[];
  allProjects!: IProject[];
  allInstitution!: IInstitution[];
  allCities!: ICity[];

  loggedUser = this.tokenStorageService.getUser();

  private dataServiceUrlUserEndpoint: string = 'http://localhost:8080/api/user/';
  private dataServiceUrlApiEndpoint: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private  tokenStorageService: TokenStorageService) {}

  getPerson(): Observable<IPerson>{
    if (this.tokenStorageService.getUser() != null) {
      return this.http.get<IPerson>(this.dataServiceUrlUserEndpoint+ this.loggedUser+'/person').pipe(
        tap( data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
    } else {
      return this.http.get<IPerson>(this.dataServiceUrlUserEndpoint+ 'luoderiz'+'/person').pipe(
        tap( data => this.person = data),
        tap( data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  }

  getAllInstitutions(): Observable<IInstitution[]> {
    if (this.allInstitution != null ) {
      return of(this.allInstitution);
    }
    return this.http.get<IInstitution[]>(this.dataServiceUrlApiEndpoint+ 'institution').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allInstitution = data),
      catchError(this.handleError)
    );
  }

  postInstitution(institution: string, cityId: number): Observable<IInstitution>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("institution", institution);
    params.set("city_id", cityId.toString());
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<IInstitution>(
      this.dataServiceUrlApiEndpoint +'institution',
      params,
      httpOptions);
  }

  getAllCities(): Observable<ICity[]> {
    if (this.allCities != null ) {
      return of(this.allCities);
    }
    return this.http.get<ICity[]>(this.dataServiceUrlApiEndpoint+ 'city').pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      tap( data => this.allCities = data),
      catchError(this.handleError)
    );
  }

  numberOf(cardType: string): Observable<number> {
    if (cardType === 'about') {
      if (this.allAbout != null) {
        return of(this.allAbout.length);
      } else {
        return this.getAllAbouts().pipe(map((abouts: IAbout[]) => abouts.length));
      }
    } else if (cardType === 'education') {
      if (this.allEducation != null) {
        return of(this.allEducation.length);
      } else {
        return this.getAllEducations().pipe(map((educations: IEducation[]) => educations.length));
      }
    } else if (cardType === 'professional') {
      if (this.allWorkExperience != null) {
        return of(this.allWorkExperience.length);
      } else {
        return this.getAllWorkExperiences().pipe(map((workexperiences: IWorkexperience[]) => workexperiences.length));
      }
    } else if (cardType === 'hardskills') {
      if (this.allHardSkill != null) {
        return of(this.allHardSkill.length);
      } else {
        return this.getAllHardSkills().pipe(map((hardskills: ISkill[]) => hardskills.length));
      }
    } else if (cardType === 'softskills') {
      if ( this.allSoftSkill != null ) {
        return of(this.allSoftSkill.length);
      } else {
        return this.getAllSoftSkills().pipe(map((softskills: ISkill[]) => softskills.length));
      }
    } else if (cardType === 'projects') {
      if ( this.allProjects != null ) {
        return of(this.allProjects.length);
      } else {
        return this.getAllProjects().pipe(map((projects: IProject[]) => projects.length));
      }
    }
    return throwError('Error on data service: card type does not exist');
  }

  getAllAbouts(): Observable<IAbout[]> {
    if (this.tokenStorageService.getUser() != null) {
      if (this.allAbout != null) {
        return of(this.allAbout);
      }
      return this.http.get<IAbout[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/about').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allAbout = data),
        catchError(this.handleError)
      );
    } else {
      return this.http.get<IAbout[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/about').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allAbout = data),
        catchError(this.handleError)
      );

    }
  }

  getAbout(aboutId: number): Observable<IAbout> {
    if (this.allAbout == null ){
      this.getAllAbouts().pipe(
        map((abouts: IAbout[]) => abouts[aboutId]));
    } else if (aboutId < this.allAbout.length ) {
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
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/about',
      params,
      httpOptions);
  }

  patchAbout(dataId: number, about?: string): Observable<IAbout>  {
    let params: URLSearchParams = new URLSearchParams;
    if(about){
      params.set("about", about);
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<IAbout>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/about/' + dataId,
      params,
      httpOptions);
  }

  deleteAbout(dataId: number): Observable<IAbout>  {
    return this.http.delete<IAbout>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/about/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getAllEducations(): Observable<IEducation[]>{
    if (this.tokenStorageService.getUser() != null) {
      if (this.allEducation != null) {
        return of(this.allEducation);
      }
      return this.http.get<IEducation[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/education').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allEducation = data),
        catchError(this.handleError)
      );
    } else {
      if (this.allEducation != null) {
        return of(this.allEducation);
      }
      return this.http.get<IEducation[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/education').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allEducation = data),
        catchError(this.handleError)
      );
    }
  }

  getEducation(educationId: number):Observable<IEducation> {
    if (this.allEducation == null ){
      this.getAllEducations().subscribe({
        next: educations => {
          return of(educations[educationId]);
        }
      })
    } else if (educationId < this.allEducation.length ) {
      return of(this.allEducation[educationId]);
    }
    return EMPTY;
  }

  postEducation(degree: string, dateFrom: string, dateTo: string, institutionId: number): Observable<IEducation> {
    let params: URLSearchParams = new URLSearchParams;
    params.set("degree", degree);
    params.set("date_from", dateFrom);
    params.set("date_to", dateTo);
    params.set("institution_id", institutionId.toString());
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<IEducation>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/education',
      params,
      httpOptions);
  }

  patchEducation(dataId: number, educationDegree: string, educationDateFrom: string, educationDateTo: string, educationInstitutionId: number): Observable<IEducation>  {
    let params: URLSearchParams = new URLSearchParams;
    if(educationDegree){
      params.set("degree", educationDegree);
    }
    if(educationDateFrom){
      params.set("date_from", educationDateFrom);
    }
    if(educationDateTo){
      params.set("date_to", educationDateTo);
    }
    if(educationInstitutionId){
      params.set("institution_id", educationInstitutionId.toString());
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<IEducation>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/education/' + dataId,
      params,
      httpOptions);
  }

  deleteEducation(dataId: number): Observable<unknown>  {
    return this.http.delete<IEducation>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/education/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getAllWorkExperiences(): Observable<IWorkexperience[]> {
    if (this.tokenStorageService.getUser() != null) {
      if (this.allWorkExperience != null) {
        return of(this.allWorkExperience);
      }
      return this.http.get<IWorkexperience[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/workexperience').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allWorkExperience = data),
        catchError(this.handleError)
      );
    } else {
      if (this.allWorkExperience != null) {
        return of(this.allWorkExperience);
      }
      return this.http.get<IWorkexperience[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/workexperience').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allWorkExperience = data),
        catchError(this.handleError)
      );

    }
  }

  getWorkExperience(workExperienceId: number):Observable<IWorkexperience> {
    if (this.allWorkExperience == null ){
      this.getAllWorkExperiences().subscribe({
        next: workExperiences => {
          console.log("data service getWorkExperience when allWorkExperience is null");
          console.log(workExperiences[workExperienceId] + " " + workExperienceId );
          return of(workExperiences[workExperienceId]);
        }
      })
    } else if (workExperienceId < this.allWorkExperience.length ) {
      return of(this.allWorkExperience[workExperienceId]);
    }
    return EMPTY;
  }

  postWorkexperience(position: string, dateFrom: string, dateTo: string, details: string, institutionId: number): Observable<IWorkexperience>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("position", position);
    params.set("date_from", dateFrom);
    params.set("date_to", dateTo);
    params.set("details", details);
    params.set("institution_id", institutionId.toString());
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<IWorkexperience>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/workexperience',
      params,
      httpOptions);
  }

  patchWorkExperience(dataId: number, workexperiencePosition: string, workexperienceDateFrom: string, workexperienceDateTo: string, workexperienceDetails: string, workexperienceInstitutionId: number): Observable<IWorkexperience>  {
    let params: URLSearchParams = new URLSearchParams;
    if(workexperiencePosition){
      params.set("position", workexperiencePosition);
    }
    if(workexperienceDateFrom){
      params.set("date_from", workexperienceDateFrom);
    }
    if(workexperienceDateTo){
      params.set("date_to", workexperienceDateTo);
    }
    if(workexperienceDetails){
      params.set("details", workexperienceDetails);
    }
    if(workexperienceInstitutionId){
      params.set("institution_id", workexperienceInstitutionId.toString());
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<IWorkexperience>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/workexperience/' + dataId,
      params,
      httpOptions);
  }

  deleteWorkexperience(dataId: number): Observable<unknown>  {
    return this.http.delete<IWorkexperience>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/project/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getAllSoftSkills(): Observable<ISkill[]> {
    if (this.tokenStorageService.getUser() != null) {
      if (this.allSoftSkill != null) {
        return of(this.allSoftSkill);
      }
      return this.http.get<ISkill[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/softskill').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allSoftSkill = data),
        catchError(this.handleError)
      );
    } else {
      if (this.allSoftSkill != null) {
        return of(this.allSoftSkill);
      }
      return this.http.get<ISkill[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/softskill').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allSoftSkill = data),
        catchError(this.handleError)
      );
    }
  }

  getSoftSkill(SoftSkillId: number):Observable<ISkill> {
    if (this.allSoftSkill == null ){
      this.getAllSoftSkills().subscribe({
        next: softskills => {
          return of(softskills[SoftSkillId]);
        }
      })
    } else if (SoftSkillId < this.allSoftSkill.length ) {
      return of(this.allSoftSkill[SoftSkillId]);
    }
    return EMPTY;
  }

  postSoftSkill(skill: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("skill", skill);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<ISkill>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/softskill',
      params,
      httpOptions);
  }

  patchSoftSkill(dataId: number, softskill?: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    if(softskill){
      params.set("skill", softskill);
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<ISkill>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/softskill/' + dataId,
      params,
      httpOptions);
  }

  deleteSoftSkill(dataId: number): Observable<ISkill>  {
    return this.http.delete<ISkill>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/softskill/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getAllHardSkills(): Observable<ISkill[]> {
    if (this.tokenStorageService.getUser() != null) {
      if (this.allHardSkill != null) {
        return of(this.allHardSkill);
      }
      return this.http.get<ISkill[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/hardskill').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allHardSkill = data),
        catchError(this.handleError)
      );
    } else {
      if (this.allHardSkill != null) {
        return of(this.allHardSkill);
      }
      return this.http.get<ISkill[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/hardskill').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allHardSkill = data),
        catchError(this.handleError)
      );
    }
  }

  getHardSkill(HardSkillId: number):Observable<ISkill> {
    if (this.allHardSkill == null ){
      this.getAllHardSkills().subscribe({
        next: hardskills => {
          return of(hardskills[HardSkillId]);
        }
      })
    } else if (HardSkillId < this.allHardSkill.length ) {
      return of(this.allHardSkill[HardSkillId]);
    }
    return EMPTY;
  }

  postHardSkill(skill: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    params.set("skill", skill);
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.post<ISkill>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/hardskill',
      params,
      httpOptions);
  }

  patchHardSkill(dataId: number, hardskill?: string): Observable<ISkill>  {
    let params: URLSearchParams = new URLSearchParams;
    if(hardskill){
      params.set("skill", hardskill);
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<ISkill>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/hardskill/' + dataId,
      params,
      httpOptions);
  }

  deleteHardSkill(dataId: number): Observable<ISkill>  {
    return this.http.delete<ISkill>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/hardskill/' + dataId).pipe(
      catchError(this.handleError)
    );
  }

  getAllProjects(): Observable<IProject[]> {
    if (this.tokenStorageService.getUser() != null) {
      if (this.allProjects != null) {
        return of(this.allProjects);
      }
      return this.http.get<IProject[]>(this.dataServiceUrlUserEndpoint + this.loggedUser + '/project').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allProjects = data),
        catchError(this.handleError)
      );
    } else {
      if (this.allProjects != null) {
        return of(this.allProjects);
      }
      return this.http.get<IProject[]>(this.dataServiceUrlUserEndpoint + 'luoderiz' + '/project').pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        tap(data => this.allProjects = data),
        catchError(this.handleError)
      );
    }
  }

  getProject(ProjectId: number):Observable<IProject> {
    if (this.allProjects == null ){
      this.getAllProjects().subscribe({
        next: projects => {
          return of(projects[ProjectId]);
        }
      })
    } else if (ProjectId < this.allProjects.length ) {
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
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/project',
      params,
      httpOptions);
  }


  patchProjects(dataId: number, projectname?: string, projectdetails?: string, projecturl?: string): Observable<IProject>  {
    let params: URLSearchParams = new URLSearchParams;
    if(projectname){
      params.set("name", projectname);
    }
    if(projectdetails){
      params.set("details", projectdetails);
    }
    if(projecturl){
      params.set("url", projecturl);
    }
    const httpOptions = { headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};
    return this.http.patch<IProject>(
      this.dataServiceUrlUserEndpoint + this.loggedUser +'/project/' + dataId,
      params,
      httpOptions);
  }


  deleteProject(dataId: number): Observable<unknown>  {
    return this.http.delete<IProject>(this.dataServiceUrlUserEndpoint + this.loggedUser +'/project/' + dataId).pipe(
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
