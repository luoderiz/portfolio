import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TokenStorageService} from "../../common/token-storage.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../common/authentication.service";
import {DataService} from "../../common/data.service";
import {IPerson} from "./person";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  title = 'Portfolio';
  person: IPerson = {
    name: "",
    surname: "",
    git: "",
    mail: "",
    username: ""
  }

  logout() {
    this.authenticationService.logout();
  }

  constructor(private dataService: DataService, private tokenStorageService: TokenStorageService, private route: Router, private authenticationService: AuthenticationService) { }

  isLoggedIn!: boolean;

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
    this.dataService.getPerson().subscribe({
      next: person => {
        this.person = person }
    });
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
  }
}
