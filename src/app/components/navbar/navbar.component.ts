import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  layout: string[] = ["Sobre mí", "Educación y Experiencia", "Hard & soft skills", "Proyectos"];
  static layout: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
