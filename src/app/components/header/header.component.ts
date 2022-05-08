import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TokenStorageService} from "../../common/token-storage.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../common/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  title = 'Portfolio';
  name = 'Lucía Oderiz Mesropian';

  logout() {
    this.authenticationService.logout();
  }
  constructor(private tokenStorageService: TokenStorageService, private route: Router, private authenticationService: AuthenticationService) { }

  isLoggedIn!: boolean;

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
  }
}
