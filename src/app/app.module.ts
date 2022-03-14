import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmapComponent } from './components/mainmap/mainmap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { NavbuttonComponent } from './components/navbutton/navbutton.component';
import { DataService } from './common/data.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmapComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    MilestoneComponent,
    NavbuttonComponent,
    WelcomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'aboutme', component: MainmapComponent},
      {path: 'skills', component: MainmapComponent},
      {path: 'profesional', component: MainmapComponent},
      {path: 'projects', component: MainmapComponent},
      {path: '', redirectTo: 'welcome', pathMatch: "full"},
      {path: '**', component: NotfoundComponent, pathMatch: "full"}
    ]) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
