import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css'],
})

export class MainmapComponent implements OnInit {
  currentPosition: number = 0;
  position: number = 0;
  type!: string;

  sendPath(pathNumber: number): void {
    this.currentPosition = pathNumber;
  }

  constructor (private activatedRoute: ActivatedRoute) {  }

//todo: ver si está de más el type acá
  ngOnInit(): void {
    this.type = String(this.activatedRoute.snapshot.url[0].path);
  }
};
