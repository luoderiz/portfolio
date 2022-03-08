import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmapComponent } from './components/mainmap/mainmap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { NavbuttonComponent } from './components/navbutton/navbutton.component';
// import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
/*     RouterModule.forRoot([
      {path: 'aboutme', component: MainmapComponent}
    ]) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
