import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../common/data.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() dataId!: number;
  @Input() cardType!: string;
  user!: any;
  about!: string;
  softskill!: string;
  hardskill!: string;
  projectname!: string;
  projectdetails!: string;
  projecturl!: string;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }
  add(): void {
    if (this.cardType === "about") {
      this.about = "Yo quiero tener un millón de amigos";
      this.dataService.postAbout(this.about).subscribe();
      console.log(`User wants to post ${this.about} on ${this.user}`);
      /*
    } else if (this.cardType === "professional") {

    } else if (this.cardType === "education") {
*/
    } else if (this.cardType === "hardskills") {
      this.hardskill = "Music writing and reading";
      this.dataService.postHardSkill(this.hardskill).subscribe();
      console.log(`User wants to post ${this.hardskill} on ${this.user}`);
    } else if (this.cardType === "softskills") {
      this.softskill = "I can´t get no satisfaction";
      this.dataService.postSoftSkill(this.softskill).subscribe();
      console.log(`User wants to post ${this.softskill} on ${this.user}`);
    } else if (this.cardType === "projects") {
      this.projectname = "Centro Mick Jagger";
      this.projectdetails = "El Centro Mick Jagger es un lugar de artes escénicas en Dartford, Kent, Inglaterra, Reino Unido, dentro de los terrenos de Dartford Grammar School. Lleva el nombre del cantante de los Rolling Stones, Mick Jagger, que era alumno de la escuela. Tiene dos escenarios principales y organiza talleres de teatro en verano.";
      this.projecturl = "https://www.dartfordgrammarschool.org.uk/AboutUs/Welcome/";
      this.dataService.postProjects(this.projectname, this.projectdetails, this.projecturl).subscribe();
      console.log(`User wants to post ${this.projectname} with this url: ${this.projecturl} on ${this.user}. Details are ${this.projectdetails}`);

    }
  }
}
