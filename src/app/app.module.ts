import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmapComponent } from './components/mainmap/mainmap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { MilestoneComponent } from './components/milestone/milestone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmapComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    MilestoneComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
