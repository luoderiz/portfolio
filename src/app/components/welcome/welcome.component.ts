import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle: string = "Bienvenidos a mi portfolio";
  pageDescription: string = "Algunos de mis recorridos de vida";
  pageMapAlternative: string = "Navegar los itinerarios en el mapa";
  pageBookAlternative: string = "Versión alternativa: diario de viaje";

  constructor() { }

  ngOnInit(): void {
  }

}
