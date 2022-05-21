import {Component, Input, OnInit} from '@angular/core';
import { IMilestone } from './milestone';
import { VisualService } from 'src/app/common/visual.service';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../../common/data.service";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css'],
})

export class MilestoneComponent implements OnInit {
  @Input() cardIndicator: number = 0;
  @Input() position!: number;
  @Input() type: string = "";

  path: IMilestone = {icon: "", imageUrl: "", type: ""};

  ngOnInit(): void {
    this.type = String(this.activatedRoute.snapshot.url[0].path);
    this.path = this.visualService.getCurrentMilestone(this.position, this.type);
  };

  constructor(private visualService: VisualService, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  public shouldBeShown(): boolean {
    return this.cardIndicator < this.dataService.numberOf(this.type);
  }
}

/*   @Input() allAbout!: IAboutMe[];
  @Input() allWorkexperience!: IWorkexperience[];
  @Input() allSoftSkills!: ISkill[];
  @Input() allHardSkills!: ISkill[];
  @Input() allProjects!: IProject[];
 allInformationList: any;
 */

/*     if (this.type === "about") {
      this.allInformationList = this.allAbout;
    } else if (this.type === "professional") {
      this.allInformationList = this.allWorkexperience;
    } else if (this.type === "hardskills") {
      this.allInformationList = this.allHardSkills;
    } else if (this.type === "softskills") {
      this.allInformationList = this.allSoftSkills;
    } else if (this.type === "projects") {
      this.allInformationList = this.allProjects;
    }
    */
