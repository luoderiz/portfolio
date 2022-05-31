import {Component, Input, OnInit} from '@angular/core';
import { IMilestone } from './milestone';
import { VisualService } from 'src/app/common/visual.service';
import { ActivatedRoute } from '@angular/router';
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css'],
  animations: [
    trigger( "isActivated", [
      state("false", style({opacity: 0.7} )),
      state("true", style({opacity: 1})),
    ])
  ]
})
export class MilestoneComponent implements OnInit {
  @Input() position!: number;
  @Input() activated: boolean = false;

  type: string = "";
  path: IMilestone = {icon: "", imageUrl: "", type: ""};

  constructor(private visualService: VisualService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = String(this.activatedRoute.snapshot.url[0].path);
    this.path = this.visualService.getCurrentMilestone(this.position, this.type);
  };

}
