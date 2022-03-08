import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from './menu';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css'],
})

export class NavbuttonComponent implements OnInit {
  @Input() htmlId: number = 0;
  menu: IMenu = {menuId: 0, menuText: "Sobre mí"};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.menu = this.dataService.getSpecifictMenu(this.htmlId);
  }

}
