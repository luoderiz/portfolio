import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { IMilestone } from './milestone';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css'],
})
export class MilestoneComponent implements OnInit {
  @Input() cardIndicator: number = 8;
  @Input() position: number = (8);

  path: IMilestone = {icon: "", imageUrl: ""};

  ngOnInit(): void {
    this.path = this.dataService.getCurrentMilestone(this.position);
  }

  constructor(private dataService: DataService) { }

};
