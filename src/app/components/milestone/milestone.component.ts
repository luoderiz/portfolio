import { Component, Input, OnInit } from '@angular/core';
import { IMilestone } from './milestone';
import { VisualService } from 'src/app/common/visual.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css'],
})
export class MilestoneComponent implements OnInit {
  @Input() cardIndicator: number = 0;
  @Input() position: number = (0);
  @Input() type: string = "";

  path: IMilestone = {icon: "", imageUrl: "", type: ""};

  ngOnInit(): void {
    this.type = String(this.activatedRoute.snapshot.url[0].path);
    this.path = this.visualService.getCurrentMilestone(this.position, this.type);
  }

  constructor(private visualService: VisualService, private activatedRoute: ActivatedRoute) { }

};
