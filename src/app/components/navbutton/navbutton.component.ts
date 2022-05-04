import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from './menu';
import { VisualService } from 'src/app/common/visual.service';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css'],
})

export class NavbuttonComponent implements OnInit {
  @Input() htmlId: number = 0;
  menu: IMenu = {menuId: 0, menuText: "Sobre mí"};

  constructor(private visualService: VisualService) { }

  ngOnInit(): void {
    this.menu = this.visualService.getSpecificMenu(this.htmlId);
  }

}
