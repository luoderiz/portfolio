import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IAboutMe } from '../card/aboutme';
import { IWorkexperience } from '../card/workexperience';
import { ISkill } from '../card/skill';
import { IProject } from '../card/project';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() cardIndicator!: number;

  allWorkexperience!: IWorkexperience[];
  workexperience: IWorkexperience = {id: 0, position: "", dateFrom: "2008-03-01", dateTo: "2008-03-01", institutionName: "", institutionCity: "", details: "", tag: [""]};

  allAboutme!: IAboutMe[];
  aboutme: IAboutMe = {id: 0, about: ""};

  allSoftSkill!: ISkill[];
  softSkill: ISkill = {id: 0, skill: ""};

  allHardSkill!: ISkill[];
  hardSkill: ISkill = {id: 0, skill: ""};

  allProjects!: IProject[];
  projects: IProject = {id: 0, projectName: "", projectUrl: "", projectDescription: ""};
  errorMessage: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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

}
