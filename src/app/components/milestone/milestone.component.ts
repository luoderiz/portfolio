import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { IMilestone } from './milestone';
import { DataService } from 'src/app/common/data.service';
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
    this.path = this.dataService.getCurrentMilestone(this.position, this.type);

    console.log( this.type + "  type" );
    console.log( String(this.activatedRoute.snapshot.url[0].path) + "  path");
    console.log( this.dataService.getCurrentMilestone(this.position, this.type) + " GET MILESTONE position y type" );
  }

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

};
