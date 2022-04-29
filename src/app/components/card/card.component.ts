import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IWorkexperience } from './workexperience';
import { IAboutMe } from './aboutme';
import { ISkill } from './skill';
import { IProject } from './project';
import { ActivatedRoute } from '@angular/router';
import { IEducation } from './education';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() cardIndicator: number = 0;
  errorMessage: any;
  cardType: string = "";

  allEducation!: IEducation[];
  education: IEducation = {
    id: 0,
    degree: "",
    date_from: "",
    date_to: "",
    institution_name: "",
    institution_city: "",
    tag: [""],
    person_id:1};

  allWorkexperience!: IWorkexperience[];
  workexperience: IWorkexperience = {
    id: 0, position: "", 
    date_from: "", 
    date_to: "2", 
    institution_name: "", 
    institution_city: "", 
    details: "", 
    tag: [""],
    person_id:1};

  allAboutme!: IAboutMe[];
  aboutme: IAboutMe = {id:1, 
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

    this.dataService.getWorkExperience().subscribe({
      next: allWorkexperience => {
        this.allWorkexperience = allWorkexperience;
        this.workexperience = this.allWorkexperience[this.cardIndicator];
      },
      error: err => this.errorMessage = err,
    });


    this.dataService.getAboutme().subscribe({
      next: allAboutme => {
        this.allAboutme = allAboutme;
        this.aboutme = this.allAboutme[this.cardIndicator];
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getSoftSkill().subscribe({
      next: allSoftSkill => {
        this.allSoftSkill = allSoftSkill;
        this.softSkill = this.allSoftSkill[this.cardIndicator];
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getHardSkill().subscribe({
      next: allHardSkill => {
        this.allHardSkill = allHardSkill;
        this.hardSkill = this.allHardSkill[this.cardIndicator];
      },
      error: err => this.errorMessage = err,
    });
    
    this.dataService.getProjects().subscribe({
      next: allProjects => {
        this.allProjects = allProjects;
        this.projects = this.allProjects[this.cardIndicator];
      },
      error: err => this.errorMessage = err,
    });
  }

  ngOnChanges(): void {
    if (this.cardType === "aboutme") {
      this.aboutme = this.allAboutme[this.cardIndicator];
    } else if (this.cardType === "profesional") {
      this.workexperience = this.allWorkexperience[this.cardIndicator];
    } else if (this.cardType === "hardskills") {
      this.hardSkill = this.allHardSkill[this.cardIndicator];
    } else if (this.cardType === "softskills") {
      this.softSkill = this.allSoftSkill[this.cardIndicator];
    } else if (this.cardType === "projects") {
      this.projects = this.allProjects[this.cardIndicator];
    } else if (this.cardType === "education") {
      this.education = this.allEducation[this.cardIndicator];
    }

    }
}
