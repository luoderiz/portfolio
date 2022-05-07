import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle = 'Bienvenidos a mi portfolio';
  pageDescription = 'Algunos de mis recorridos de vida';
  pageMapAlternative = 'Navegar los itinerarios en el mapa';
  pageBookAlternative = 'Versión alternativa: diario de viaje';

  constructor() { }

  ngOnInit(): void {
  }

}
