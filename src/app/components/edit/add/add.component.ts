import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../common/data.service";
import {NgbActiveModal, NgbInputDatepickerConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;

  faCalendar = faCalendar;

  about!: string;
  softskill!: string;
  hardskill!: string;
  projectName!: string;
  projectDetails!: string;
  projectUrl!: string;
  workexperiencePosition!: string;
  workexperienceDateFrom!: string;
  workexperienceDateTo!: string;
  workexperienceDetails!: string;
  workexperienceInstitutionId!: number;

  aboutForm!: FormGroup;
  hardskillForm!: FormGroup;
  softskillForm!: FormGroup;
  projectForm!: FormGroup;
  workexperienceForm!: FormGroup;
  educationForm!: FormGroup;

  errorMessage = '';

  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate;
  toDate!: NgbDate | null;

  constructor(private dataService: DataService, public activeModal: NgbActiveModal, private formbuilder: FormBuilder, private route: Router, public formatter: NgbDateParserFormatter) {
    this.aboutForm = this.formbuilder.group({
      inputAbout: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1020)]]
    });
    this.hardskillForm = this.formbuilder.group({
      inputHardskill: ['', [Validators.required, Validators.maxLength(1020)]]
    });
    this.softskillForm = this.formbuilder.group({
      inputSoftskill: ['', [Validators.required, Validators.maxLength(1020)]]
    });
    this.workexperienceForm = this.formbuilder.group({
      inputWorkexperiencePosition: ['', [Validators.required, Validators.maxLength(1020)]],
      inputWorkexperienceDateFrom: ['', []],
      inputWorkexperienceDateTo: ['', []],
      inputWorkexperienceDetails: ['', [Validators.maxLength(255)]],
      inputWorkexperienceInstitutionId: ['', [Validators.required]],
    });
    this.projectForm = this.formbuilder.group({
      inputProjectName: ['', [Validators.required, Validators.maxLength(60)]],
      inputProjectDetails: ['', [Validators.maxLength(1020)]],
      inputProjectUrl: ['', [Validators.maxLength(500)]]
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
    } else if (this.cardType === "hardskill") {
      this.hardskill = this.hardskillForm.get('inputHardskill')?.value;
      this.dataService.postHardSkill(this.hardskill).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "softskill") {
      this.softskill = this.softskillForm.get('inputSoftskill')?.value;
      this.dataService.postSoftSkill(this.softskill).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "projects") {
      this.projectName = this.projectForm.get('inputProjectName')?.value;
      this.projectDetails = this.projectForm.get('inputProjectDetails')?.value;
      this.projectUrl = this.projectForm.get('inputProjectUrl')?.value;
      this.dataService.postProjects(this.projectName, this.projectDetails, this.projectUrl).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => this.errorMessage = err,
      });
    } else if (this.cardType === "professional") {
      this.workexperiencePosition = this.workexperienceForm.get('inputWorkexperiencePosition')?.value;
      this.workexperienceDateFrom = this.workexperienceForm.get('inputWorkexperienceDateFrom')?.value.toISOString().split('T')[0];
      this.workexperienceDateTo = this.workexperienceForm.get('inputWorkexperienceDateTo')?.value.toISOString().split('T')[0];
      this.workexperienceDetails = this.workexperienceForm.get('inputWorkexperienceDetails')?.value;
      this.workexperienceInstitutionId = this.workexperienceForm.get('inputWorkexperienceInstitutionId')?.value;
      this.dataService.postWorkexperience(this.workexperiencePosition, this.workexperienceDateFrom, this.workexperienceDateTo, this.workexperienceDetails, this.workexperienceInstitutionId).subscribe({
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

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

}
