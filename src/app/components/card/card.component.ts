import {Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IWorkexperience } from './workexperience';
import { IAbout } from './about';
import { ISkill } from './skill';
import { IProject } from './project';
import { ActivatedRoute } from '@angular/router';
import { IEducation } from './education';

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

  allEducation!: IEducation[];
  education: IEducation = {
    id: 0,
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
    workexperience_id: 0, position: "",
    date_from: "",
    date_to: "2",
    details: "",
    person_id:1,
    tag: [""],
    institution: {institution_id: 1,
    name: "",
    city: ""}};

  allAbout!: IAbout[];
  about: IAbout = {id:1,
    about:"",
    person_id:1};

  allSoftSkill!: ISkill[];
  softSkill: ISkill = {id:1,
    skill:"",
    person_id:1};

  allHardSkill!: ISkill[];
  hardSkill: ISkill = {id:1,
    skill:"",
    person_id:1};

  allProjects!: IProject[];
  projects: IProject = {id:1,
    name:"",
    url:"",
    details:"",
    person_id:1};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardType = String(this.activatedRoute.snapshot.url[0].path);
    if (this.cardType === "about") {
      this.dataService.getAbout().subscribe({
        next: allAbout => {
          this.allAbout = allAbout;
          this.about = this.allAbout[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "professional") {
      this.dataService.getWorkExperience().subscribe({
        next: allWorkexperience => {
          this.allWorkexperience = allWorkexperience;
          this.workexperience = this.allWorkexperience[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "education") {
      this.dataService.getEducation().subscribe({
        next: allEducation => {
          this.allEducation = allEducation;
          this.education = this.allEducation[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "hardskill") {
      this.dataService.getHardSkill().subscribe({
        next: allHardSkill => {
          this.allHardSkill = allHardSkill;
          this.hardSkill = this.allHardSkill[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "softskill") {
      this.dataService.getSoftSkill().subscribe({
        next: allSoftSkill => {
          this.allSoftSkill = allSoftSkill;
          this.softSkill = this.allSoftSkill[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "projects") {
      this.dataService.getProjects().subscribe({
        next: allProjects => {
          this.allProjects = allProjects;
          this.projects = this.allProjects[this.cardIndicator];
        },
        error: err => this.errorMessage = err,
      });
    }
  }

}
