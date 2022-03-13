import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  menuPosition: number = 0;

  sendMenuId(htmlId: number): void {
  this.menuPosition = htmlId;
  }

  ngOnInit(): void {
  };
}
