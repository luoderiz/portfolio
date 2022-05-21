import {Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IWorkexperience } from './workexperience';
import { IAbout } from './about';
import { ISkill } from './skill';
import { IProject } from './project';
import { ActivatedRoute } from '@angular/router';
import { IEducation } from './education';
import {TokenStorageService} from "../../common/token-storage.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardIndicator: number = 0;
  errorMessage: any;
  cardType: string = "";
  content?: any;
  dataId!: number;
  dataTitle!: string;
  cardAlias!: string;

  isLoggedIn!: boolean;

  education: IEducation = {
    education_id: 0,
    degree: "",
    date_from: "",
    date_to: "",
    institution: {institution_id: 1,
      institution: "",
      city: {
      city_id: 0,
        city: ""}
    },
    person_id:1,
    };

  workexperience: IWorkexperience = {
    workexperience_id: 0,
    position: "",
    date_from: "",
    date_to: "2",
    details: "",
    person_id:1,
    institution: {institution_id: 1,
      institution: "",
      city: {
        city_id: 0,
        city: ""}
    }};

  about: IAbout = {
    about_id:1,
    about:"",
    person_id:1};

  allSoftSkill!: ISkill[];
  softSkill: ISkill = {
    skill:"",
    person_id:1,
    skill_id:1};

  allHardSkill!: ISkill[];
  hardSkill: ISkill = {
    skill:"",
    person_id:1,
    skill_id:1};

  allProjects!: IProject[];
  projects: IProject = {project_id:1,
    name:"",
    url:"",
    details:"",
    person_id:1};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
    this.cardType = String(this.activatedRoute.snapshot.url[0].path);
    if (this.cardType === "about") {
      this.dataService.getAbout(this.cardIndicator).subscribe({
        next: about => {
          this.about = about;
          this.dataId = about.about_id;
          this.dataTitle = about.about;
          this.cardAlias = 'Sobre mí';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "professional") {
      this.dataService.getWorkExperience(this.cardIndicator).subscribe({
        next: workexperience => {
          this.workexperience = workexperience;
          this.dataId = workexperience.workexperience_id;
          this.dataTitle = workexperience.position;
          this.cardAlias = 'Recorridos profesionales';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "education") {
      this.dataService.getEducation(this.cardIndicator).subscribe({
        next: education => {
          this.education = education;
          this.dataId = education.education_id;
          this.dataTitle = education.degree;
          this.cardAlias = 'Formación';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "hardskills") {
      this.dataService.getHardSkill(this.cardIndicator).subscribe({
        next: hardSkill => {
          this.hardSkill = hardSkill;
          this.dataId = hardSkill.skill_id;
          this.dataTitle = hardSkill.skill;
          this.cardAlias = 'Hard skills';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "softskills") {
      this.dataService.getSoftSkill(this.cardIndicator).subscribe({
        next: softskill => {
          this.softSkill = softskill;
          this.dataId = softskill.skill_id;
          this.dataTitle = softskill.skill;
          this.cardAlias = 'Soft skills';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "projects") {
      this.dataService.getProject(this.cardIndicator).subscribe({
        next: project => {
          this.projects = project;
          this.dataId = project.project_id;
          this.dataTitle = project.name;
          this.cardAlias = 'Proyectos';
        },
        error: err => this.errorMessage = err,
      });
    }
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
    this.cardType = String(this.activatedRoute.snapshot.url[0].path);
    if (this.cardType === "about") {
      this.dataService.getAbout(this.cardIndicator).subscribe({
        next: about => {
          this.about = about;
          this.dataId = about.about_id;
          this.dataTitle = about.about;
          this.cardAlias = 'Sobre mí';

        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "professional") {
      this.dataService.getWorkExperience(this.cardIndicator).subscribe({
        next: workexperience => {
          this.workexperience = workexperience;
          this.dataId = workexperience.workexperience_id;
          this.dataTitle = workexperience.position;
          this.cardAlias = 'Recorridos profesionales';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "education") {
      this.dataService.getEducation(this.cardIndicator).subscribe({
        next: education => {
          this.education = education;
          this.dataId = education.education_id;
          this.dataTitle = education.degree;
          this.cardAlias = 'Formación';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "hardskills") {
      this.dataService.getHardSkill(this.cardIndicator).subscribe({
        next: hardSkill => {
          this.hardSkill = hardSkill;
          this.dataId = hardSkill.skill_id;
          this.dataTitle = hardSkill.skill;
          this.cardAlias = 'Hard skills';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "softskills") {
      this.dataService.getSoftSkill(this.cardIndicator).subscribe({
        next: softskill => {
          this.softSkill = softskill;
          this.dataId = softskill.skill_id;
          this.dataTitle = softskill.skill;
          this.cardAlias = 'Soft skills';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "projects") {
      this.dataService.getProject(this.cardIndicator).subscribe({
        next: project => {
          this.projects = project;
          this.dataId = project.project_id;
          this.dataTitle = project.name;
          this.cardAlias = 'Proyectos';
        },
        error: err => this.errorMessage = err,
      });
    }
  }
}
