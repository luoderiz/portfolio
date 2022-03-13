import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle: string = "Bienvenidos a mi portfolio";
  pageSubTitle: string = "Proyecto elaborado en el marco de #ArgentinaPrograma";
  pageImage: string = "../../../assets/img/APLogo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
