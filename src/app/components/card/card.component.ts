import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IWorkexperience } from './workexperience';
import { IAboutMe } from './aboutme';
import { ISkill } from './skill';
import { IProject } from './project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() cardIndicator: number = 0;
  errorMessage: any;
  cardType: string = "";

  allWorkexperience!: IWorkexperience[];
  workexperience: IWorkexperience = {id: 0, position: "", dateFrom: "2008-03-01", dateTo: "2008-03-01", institutionName: "", institutionCity: "", details: "", tag: [""]};

  allAboutme!: IAboutMe[];
  aboutme: IAboutMe = {id: 0, about: ""};

  allSoftSkill!: ISkill[];
  softSkill: ISkill = {id: 0, skill: ""};

  allHardSkill!: ISkill[];
  hardSkill: ISkill = {id: 0, skill: ""};

  allProjects!: IProject[];
  projects: IProject = {id: 0, project: ""};

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
    }
  }
}
