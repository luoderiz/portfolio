import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IAboutMe } from '../card/aboutme';
import { IWorkexperience } from '../card/workexperience';
import { ISkill } from '../card/skill';
import { IProject } from '../card/project';
import { IEducation } from '../card/education';
import { IMenu } from '../navbutton/menu';
import { VisualService } from 'src/app/common/visual.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allMenues!: IMenu[];
 
  educationTitle!: string;
  workexperienceTitle!: string;
  aboutmeTitle!: string;
  hardskillTitle!: string;
  softskillTitle!: string;
  projectsTitle!: string;

  allEducation!: IEducation[];
  allWorkexperience!: IWorkexperience[];
  allAboutme!: IAboutMe[];
  allSoftSkill!: ISkill[];
  allHardSkill!: ISkill[];
  allProjects!: IProject[];
  errorMessage: any;

  constructor(private dataService: DataService, private visualService: VisualService) { }

  ngOnInit(): void {

    this.allMenues = this.visualService.getAllMenues();
    this.aboutmeTitle = this.allMenues[0].menuText;
    this.educationTitle = this.allMenues[1].menuText;
    this.workexperienceTitle = this.allMenues[2].menuText;
    this.hardskillTitle = this.allMenues[3].menuText;
    this.softskillTitle = this.allMenues[4].menuText;
    this.projectsTitle = this.allMenues[5].menuText;

    this.dataService.getEducation().subscribe({
      next: allEducation => {
        this.allEducation = allEducation;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getWorkExperience().subscribe({
      next: allWorkexperience => {
        this.allWorkexperience = allWorkexperience;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAboutme().subscribe({
      next: allAboutme => {
        this.allAboutme = allAboutme;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getSoftSkill().subscribe({
      next: allSoftSkill => {
        this.allSoftSkill = allSoftSkill;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getHardSkill().subscribe({
      next: allHardSkill => {
        this.allHardSkill = allHardSkill;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getProjects().subscribe({
      next: allProjects => {
        this.allProjects = allProjects;
      },
      error: err => this.errorMessage = err,
    });
  }

}
