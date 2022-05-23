import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../../common/data.service";

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css'],
})

export class MainmapComponent implements OnInit {
  currentPosition: number = 0;
  type!: string;
  numberOfMilestones: number = 0;

  sendPath(pathNumber: number): void {
    this.currentPosition = pathNumber;
  }

  constructor (private activatedRoute: ActivatedRoute, private dataService: DataService) {  }

  ngOnInit(): void {
    this.type = String(this.activatedRoute.snapshot.url[0].path);
    this.dataService.numberOf(this.type).subscribe({
      next: value =>
      {
        console.log('value is '+ value);
        this.numberOfMilestones = value;
      }
    });

  }

}
