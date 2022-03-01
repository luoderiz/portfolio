import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Portfolio';
  name = 'Lucía Oderiz Mesropian';
  
  constructor() { }

  ngOnInit(): void {
  }

}
