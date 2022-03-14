import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  pageTitle: string = "Página no encontrada";
  pageSubTitle: string = "¡No hay problema! Siempre quedará el punto de inicio para volver a él.";

  constructor() { }

  ngOnInit(): void {
  }

}
