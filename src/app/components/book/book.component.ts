import {Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { IAbout } from '../card/about';
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
  aboutTitle!: string;
  hardskillTitle!: string;
  softskillTitle!: string;
  projectsTitle!: string;

  allEducation!: IEducation[];
  allWorkexperience!: IWorkexperience[];
  allAbout!: IAbout[];
  allSoftSkill!: ISkill[];
  allHardSkill!: ISkill[];
  allProjects!: IProject[];

  errorMessage: any;

  constructor(private dataService: DataService, private visualService: VisualService) { }

  ngOnInit(): void {

    this.allMenues = this.visualService.getAllMenues();
    this.aboutTitle = this.allMenues[0].menuText;
    this.educationTitle = this.allMenues[1].menuText;
    this.workexperienceTitle = this.allMenues[2].menuText;
    this.hardskillTitle = this.allMenues[3].menuText;
    this.softskillTitle = this.allMenues[4].menuText;
    this.projectsTitle = this.allMenues[5].menuText;

    this.dataService.getAllEducations().subscribe({
      next: allEducation => {
        this.allEducation = allEducation;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAllWorkExperiences().subscribe({
      next: allWorkexperience => {
        this.allWorkexperience = allWorkexperience;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAllAbouts().subscribe({
      next: allAbout => {
        this.allAbout = allAbout;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAllSoftSkills().subscribe({
      next: allSoftSkill => {
        this.allSoftSkill = allSoftSkill;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAllHardSkills().subscribe({
      next: allHardSkill => {
        this.allHardSkill = allHardSkill;
      },
      error: err => this.errorMessage = err,
    });

    this.dataService.getAllProjects().subscribe({
      next: allProjects => {
        this.allProjects = allProjects;
      },
      error: err => this.errorMessage = err,
    });
  }

}
