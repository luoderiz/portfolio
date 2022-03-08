import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css'],
})

export class MainmapComponent {
  currentPosition: number = 0;
  position: number = 0;

  sendPath(pathNumber: number): void {
    this.currentPosition = pathNumber;
  }
};
