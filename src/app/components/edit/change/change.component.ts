import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../common/data.service";
import {NgbActiveModal, NgbDate, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IInstitution} from "../../card/institution";
import {ICity} from "../../card/city";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {InstitutionComponent} from "../institution/institution.component";

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;
  @Input() allInstitutions!: IInstitution[];
  @Input() allCities!: ICity[];
  institution: IInstitution = {
    institution_id: 0,
    institution: "",
    city: {
      city_id: 0,
      city: ""
    }};
  city: ICity = {
    city_id: 0,
    city: ""};

  faCalendar = faCalendar;

  patchAboutForm!: FormGroup;
  patchSoftskillForm!: FormGroup;
  patchHardskillForm!: FormGroup;
  patchEducationForm!: FormGroup;
  patchWorkexperienceForm!: FormGroup;
  patchProjectForm!: FormGroup;

  errorMessage = '';

  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate;
  toDate!: NgbDate | null;

  constructor(private dataService: DataService, public activeModal: NgbActiveModal, private formbuilder: FormBuilder, private modalService: NgbModal) {
    this.patchAboutForm = this.formbuilder.group({
      inputPatchAbout: ['', [Validators.minLength(3), Validators.maxLength(1020)]]
    });
    this.patchHardskillForm = this.formbuilder.group({
      inputPatchHardskill: ['', [Validators.maxLength(1020)]]
    });
    this.patchSoftskillForm = this.formbuilder.group({
      inputPatchSoftskill: ['', [Validators.maxLength(1020)]]
    });
    this.patchWorkexperienceForm = this.formbuilder.group({
      inputPatchWorkexperiencePosition: ['', [Validators.maxLength(1020)]],
      inputPatchWorkexperienceDateFrom: ['', []],
      inputPatchWorkexperienceDateTo: ['', []],
      inputPatchWorkexperienceDetails: ['', [Validators.maxLength(255)]],
      inputPatchWorkexperienceInstitutionId: ['', []]
    });
    this.patchProjectForm = this.formbuilder.group({
      inputPatchProjectName: ['', [Validators.maxLength(60)]],
      inputPatchProjectDetails: ['', [Validators.maxLength(1020)]],
      inputPatchProjectUrl: ['', [Validators.maxLength(500)]]
    });
    this.patchEducationForm = this.formbuilder.group({
      inputPatchEducationDegree: ['', [Validators.maxLength(1020)]],
      inputPatchEducationDateFrom: ['', []],
      inputPatchEducationDateTo: ['', []],
      inputPatchEducationInstitutionId: ['', []]
    });
  }

  ngOnInit(): void {
    this.allInstitutions = this.allInstitutions;
    this.institution = this.allInstitutions[this.institution.institution_id];
    this.allCities = this.allCities;
    this.city = this.allCities[this.city.city_id];
  }

  submit(): void {
    if (this.cardType === 'about') {
      let about!: string;
      about = this.patchAboutForm.get('inputPatchAbout')?.value;
      this.dataService.patchAbout(this.dataId, about).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => 'Error al actualizar el campo `Sobre mí`',
      });
    } else if (this.cardType === 'softskills') {
      let softskill!: string;
      softskill = this.patchSoftskillForm.get('inputPatchSoftskill')?.value;
      this.dataService.patchSoftSkill(this.dataId, softskill).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => 'Error al actualizar el campo `Soft Skill`',
      });
    } else if (this.cardType === 'hardskills') {
      let hardskill!: string;
      hardskill = this.patchHardskillForm.get('inputPatchHardskill')?.value;
      this.dataService.patchHardSkill(this.dataId, hardskill).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => 'Error al actualizar el campo `Hard Skill`',
      });
    } else if (this.cardType === "projects") {
      let projectName!: string;
      let projectDetails!: string;
      let projectUrl!: string;
      if (this.patchProjectForm.get('inputPatchProjectName')?.value != null) {
        projectName = this.patchProjectForm.get('inputPatchProjectName')?.value;
      }
      if (this.patchProjectForm.get('inputPatchProjectDetails')?.value != null) {
        projectDetails = this.patchProjectForm.get('inputPatchProjectDetails')?.value;
      }
      if (this.patchProjectForm.get('inputPatchProjectUrl')?.value != null) {
        projectUrl = this.patchProjectForm.get('inputPatchProjectUrl')?.value;
      }
      this.dataService.patchProjects(this.dataId, projectName, projectDetails, projectUrl).subscribe({
          next: () => {
            window.location.reload();
          },
          error: err => 'Error al actualizar Proyectos',
        });
    } else if (this.cardType === "education") {
      let educationDegree!: string;
      let educationDateFrom!: string;
      let educationDateTo!: string;
      let educationInstitutionId!: number;
      if (this.patchEducationForm.get('inputPatchEducationDegree')?.value != null) {
        educationDegree = this.patchEducationForm.get('inputPatchEducationDegree')?.value;
      }
      if (this.patchEducationForm.get('inputPatchEducationDateFrom')?.value.toISOString().split('T')[0] != null) {
        educationDateFrom = this.patchEducationForm.get('inputPatchEducationDateFrom')?.value.toISOString().split('T')[0];
      }
      if (this.patchEducationForm.get('inputPatchEducationDateTo')?.value.toISOString().split('T')[0] != null) {
        educationDateTo = this.patchEducationForm.get('inputPatchEducationDateTo')?.value.toISOString().split('T')[0];
      }
      if (this.patchEducationForm.get('inputPatchEducationInstitutionId')?.value != null) {
        educationInstitutionId = this.patchEducationForm.get('inputPatchEducationInstitutionId')?.value;
      }
      this.dataService.patchEducation(this.dataId, educationDegree, educationDateFrom, educationDateTo, educationInstitutionId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => 'Error al actualizar Education',
      });
    } else if (this.cardType === "professional") {
      let workexperiencePosition!: string;
      let workexperienceDateFrom!: string;
      let workexperienceDateTo!: string;
      let workexperienceDetails!: string;
      let workexperienceInstitutionId!: number;
      if (this.patchWorkexperienceForm.get('inputPatchWorkexperiencePosition')?.value != null) {
        workexperiencePosition = this.patchWorkexperienceForm.get('inputPatchWorkexperiencePosition')?.value;
      }
      if (this.patchWorkexperienceForm.get('inputPatchWorkexperienceDateFrom')?.value.toISOString().split('T')[0] != null) {
        workexperienceDateFrom = this.patchWorkexperienceForm.get('inputPatchWorkexperienceDateFrom')?.value.toISOString().split('T')[0];
      }
      if (this.patchWorkexperienceForm.get('inputPatchWorkexperienceDateTo')?.value.toISOString().split('T')[0] != null) {
        workexperienceDateTo = this.patchWorkexperienceForm.get('inputPatchWorkexperienceDateTo')?.value.toISOString().split('T')[0];
      }
      if (this.patchWorkexperienceForm.get('inputPatchWorkexperienceDetails')?.value != null) {
        workexperienceDetails = this.patchWorkexperienceForm.get('inputPatchWorkexperienceDetails')?.value;
      }
      if (this.patchWorkexperienceForm.get('inputPatchWorkexperienceInstitutionId')?.value != null) {
        workexperienceInstitutionId = this.patchWorkexperienceForm.get('inputPatchWorkexperienceInstitutionId')?.value;
      }
      this.dataService.patchWorkExperience(this.dataId, workexperiencePosition, workexperienceDateFrom, workexperienceDateTo, workexperienceDetails, workexperienceInstitutionId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => 'Error al actualizar experiencias laborales',
      });}
  }

  close() {
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

  openInstitutionModal() {
    const modalRef = this.modalService.open(InstitutionComponent);
    modalRef.componentInstance.allInstitutions = this.allInstitutions;
    modalRef.componentInstance.allCities = this.allCities;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

}
