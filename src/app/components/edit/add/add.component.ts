import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../common/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;

  about!: string;
  softskill!: string;
  hardskill!: string;
  projectname!: string;
  projectdetails!: string;
  projecturl!: string;

  aboutForm!: FormGroup;
  errorMessage = '';

  ngOnInit(): void {
    this.aboutForm.get('inputAbout')?.valueChanges.subscribe();
  }

  constructor(private dataService: DataService, public activeModal: NgbActiveModal, private formbuilder: FormBuilder, private route: Router) {
    this.aboutForm = this.formbuilder.group({
      inputAbout: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1020)]]
    });
  }

  submit(): void {
    if (this.cardType === "about") {
      this.about = this.aboutForm.get('inputAbout')?.value;
      this.dataService.postAbout(this.about).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => this.errorMessage = err,
      });
    }
  }

  close() {
    // todo return error
    this.submit();
    this.activeModal.close();
  }

    dismiss() {
    this.activeModal.close();
  }

  add(): any {
    if (this.cardType === "about") {
      this.about = this.aboutForm.get('inputAbout')?.value.subscribe();
      this.dataService.postAbout(this.about).subscribe();
      /*
 else if (this.cardType === "professional") {

} else if (this.cardType === "education") {
*/
    } else if (this.cardType === "hardskills") {
      this.hardskill = "Music writing and reading";
      this.dataService.postHardSkill(this.hardskill).subscribe();
      console.log(`User wants to post ${this.hardskill}`);
    } else if (this.cardType === "softskills") {
      this.softskill = "I can´t get no satisfaction";
      this.dataService.postSoftSkill(this.softskill).subscribe();
      console.log(`User wants to post ${this.softskill}`);
    } else if (this.cardType === "projects") {
      this.projectname = "Centro Mick Jagger";
      this.projectdetails = "El Centro Mick Jagger es un lugar de artes escénicas en Dartford, Kent, Inglaterra, Reino Unido, dentro de los terrenos de Dartford Grammar School. Lleva el nombre del cantante de los Rolling Stones, Mick Jagger, que era alumno de la escuela. Tiene dos escenarios principales y organiza talleres de teatro en verano.";
      this.projecturl = "https://www.dartfordgrammarschool.org.uk/AboutUs/Welcome/";
      this.dataService.postProjects(this.projectname, this.projectdetails, this.projecturl).subscribe();
      console.log(`User wants to post ${this.projectname} with this url: ${this.projecturl}. Details are ${this.projectdetails}`);
    }
  }

  get aboutField() {
    return this.aboutForm.get('inputAbout');
  }
}
