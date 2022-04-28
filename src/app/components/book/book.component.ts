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
  workexperience: IWorkexperience = {id: 0, position: "", date_from: "2008-03-01", date_to: "2008-03-01", name: "", city: "", details: "", tag: [""]};

  allAboutme!: IAboutMe[];
  aboutme: IAboutMe = {id: 0, about: "", person_id: 0};

  allSoftSkill!: ISkill[];
  softSkill: ISkill = {id: 0, skill: "", person_id: 0};

  allHardSkill!: ISkill[];
  hardSkill: ISkill = {id: 0, skill: "", person_id: 0};

  allProjects!: IProject[];
  projects: IProject = {id: 0, name: "", url: "", details: "", person_id: 0};
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
