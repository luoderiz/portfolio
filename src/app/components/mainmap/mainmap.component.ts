import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css']
})

export class MainmapComponent implements OnInit {
  lighthouse: any = 
    {
      icon: "Lighthouse",
      imageUrl: "../../../assets/icons/lighthouse.png",
      layout: "NavbarComponent.layout[1]",
    };

  turtle: any =
    {
      icon: "Turtle",
      imageUrl: "../../../assets/icons/turtle.png",
      layout: "NavbarComponent.layout[1]",
    };

  mountain: any =
    {
      icon: "Mountain",
      imageUrl: "../../../assets/icons/mountain.png",
      layout: "NavbarComponent.layout[1]",
    };

  dolphin: any =
    {
      icon: "Dolphin",
      imageUrl: "../../../assets/icons/dolphin.png",
      layout: "NavbarComponent.layout[1]",
    };

  bridge: any =
    {
      icon: "Bridge",
      imageUrl: "../../../assets/icons/bridge.png",
      layout: "NavbarComponent.layout[1]",
    };
  
  windmill: any =
    {
      icon: "Windmill",
      imageUrl: "../../../assets/icons/windmill.png",
      layout: "NavbarComponent.layout[1]",
    };

  submarine: any =
    {
      icon: "Submarine",
      imageUrl: "../../../assets/icons/submarine.png",
      layout: "NavbarComponent.layout[1]",
    };

  cart: any =
    {
      icon: "Cart",
      imageUrl: "../../../assets/icons/cart.png",
      layout: "NavbarComponent.layout[1]",
    };

  well: any =
    {
      icon: "Well",
      imageUrl: "../../../assets/icons/well.png",
      layout: "NavbarComponent.layout[1]",
    };

  constructor() { }

  ngOnInit(): void {
  }
  
}