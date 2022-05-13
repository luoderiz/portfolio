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

  allEducation!: IEducation[];
  education: IEducation = {
    education_id: 0,
    degree: "",
    date_from: "",
    date_to: "",
    institution: {institution_id: 1,
      name: "",
      city: ""},
    person_id:1,
    tag: [""]};

  allWorkexperience!: IWorkexperience[];
  workexperience: IWorkexperience = {
    workexperience_id: 0,
    position: "",
    date_from: "",
    date_to: "2",
    details: "",
    person_id:1,
    tag: [""],
    institution: {institution_id: 1,
    name: "",
    city: ""}};

  allAbout!: IAbout[];
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
      this.dataService.getAbout().subscribe({
        next: allAbout => {
          this.allAbout = allAbout;
          this.about = this.allAbout[this.cardIndicator];
          this.dataId = this.about.about_id;
          this.dataTitle = this.about.about;
          this.cardAlias = 'Sobre mí';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "professional") {
      this.dataService.getWorkExperience().subscribe({
        next: allWorkexperience => {
          this.allWorkexperience = allWorkexperience;
          this.workexperience = this.allWorkexperience[this.cardIndicator];
          this.dataId = this.workexperience.workexperience_id;
          this.dataTitle = this.workexperience.position;
          this.cardAlias = 'Recorridos profesionales';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "education") {
      this.dataService.getEducation().subscribe({
        next: allEducation => {
          this.allEducation = allEducation;
          this.education = this.allEducation[this.cardIndicator];
          this.dataId = this.education.education_id;
          this.dataTitle = this.education.degree;
          this.cardAlias = 'Formación';

        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "hardskills") {
      this.dataService.getHardSkill().subscribe({
        next: allHardSkill => {
          this.allHardSkill = allHardSkill;
         this.hardSkill = this.allHardSkill[this.cardIndicator];
          this.dataId = this.hardSkill.skill_id;
          this.dataTitle = this.hardSkill.skill;
          this.cardAlias = 'Hard skills';

        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "softskills") {
      this.dataService.getSoftSkill().subscribe({
        next: allSoftSkill => {
          this.allSoftSkill = allSoftSkill;
          this.softSkill = this.allSoftSkill[this.cardIndicator];
          this.dataId = this.softSkill.skill_id;
          this.dataTitle = this.softSkill.skill;
          this.cardAlias = 'Soft skills';
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "projects") {
      this.dataService.getProjects().subscribe({
        next: allProjects => {
          this.allProjects = allProjects;
          this.projects = this.allProjects[this.cardIndicator];
          this.dataId = this.projects.project_id;
          this.dataTitle = this.projects.name;
          this.cardAlias = 'Proyectos';

        },
        error: err => this.errorMessage = err,
      });
    }
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
    if (this.cardType === "about") {
      this.about = this.allAbout[this.cardIndicator];
      this.dataId = this.about.about_id;
      this.dataTitle = this.about.about;
      this.cardAlias = 'Sobre mí';

    } else if (this.cardType === "professional") {
      this.workexperience = this.allWorkexperience[this.cardIndicator];
      this.dataId = this.workexperience.workexperience_id;
      this.dataTitle = this.workexperience.position;
      this.cardAlias = 'Recorridos profesionales';

    } else if (this.cardType === "education") {
      this.education = this.allEducation[this.cardIndicator];
      this.dataId = this.education.education_id;
      this.dataTitle = this.education.degree;
      this.cardAlias = 'Formación';

    } else if (this.cardType === "hardskills") {
      this.hardSkill = this.allHardSkill[this.cardIndicator];
      this.dataId = this.hardSkill.skill_id;
      this.dataTitle = this.hardSkill.skill;
      this.cardAlias = 'Hard skills';

    } else if (this.cardType === "softskills") {
      this.softSkill = this.allSoftSkill[this.cardIndicator];
      this.dataId = this.softSkill.skill_id;
      this.dataTitle = this.softSkill.skill;
      this.cardAlias = 'Soft skills';

    } else if (this.cardType === "projects") {
      this.projects = this.allProjects[this.cardIndicator];
      this.dataId = this.projects.project_id;
      this.dataTitle = this.projects.name;
      this.cardAlias = 'Proyectos';
    }
  };

}
