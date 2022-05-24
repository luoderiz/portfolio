import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbModal,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";

import { DataService } from './common/data.service';
import { VisualService } from './common/visual.service';
import { authInterceptorProviders } from './common/auth.interceptor';

import { CustomDatePipe } from './common/customdate.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmapComponent } from './components/mainmap/mainmap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { NavbuttonComponent } from './components/navbutton/navbutton.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/edit/add/add.component';
import { DeleteComponent } from './components/edit/delete/delete.component';
import { ChangeComponent } from './components/edit/change/change.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrormessageComponent } from './components/register/errormessage/errormessage.component';
import { InstitutionComponent } from './components/edit/add/institution/institution.component';

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
    BookComponent,
    LoginComponent,
    EditComponent,
    AddComponent,
    ChangeComponent,
    DeleteComponent,
    CustomDatePipe,
    RegisterComponent,
    ErrormessageComponent,
    InstitutionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'about', component: MainmapComponent},
      {path: 'hardskills', component: MainmapComponent},
      {path: 'softskills', component: MainmapComponent},
      {path: 'professional', component: MainmapComponent},
      {path: 'projects', component: MainmapComponent},
      {path: 'education', component: MainmapComponent},
      {path: 'book', component: BookComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'welcome', pathMatch: "full"},
      {path: '**', component: NotfoundComponent, pathMatch: "full"}
    ]),
    FontAwesomeModule,
    NgbModule,
    FormsModule,
  ],
  providers: [DataService, VisualService, authInterceptorProviders, NgbModal,
    {provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
