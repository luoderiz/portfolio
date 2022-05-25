import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IInstitution} from "../../card/institution";
import {ICity} from "../../card/city";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../common/data.service";
import {AddComponent} from "../add/add.component";
import {ChangeComponent} from "../change/change.component";

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
  @Input() allInstitutions!: IInstitution[];
  @Input() allCities!: ICity[];

  institution: IInstitution = {
    institution_id: 0,
    institution: "",
    city: {
      city_id: 0,
      city: ""
    }
  };
  city: ICity = {
    city_id: 0,
    city: ""
  };
  institutionForm!: FormGroup;
  institutionInstitution!: string;
  institutionCityId!: number;

  constructor(private dataService: DataService, public activeModal: NgbActiveModal, private formbuilder: FormBuilder, private modalService: NgbModal) {
    this.institutionForm = this.formbuilder.group({
      inputInstitutionInstitution: ['', [Validators.required, Validators.maxLength(90)]],
      inputInstitutionCityId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.allInstitutions = this.allInstitutions;
    this.institution = this.allInstitutions[this.institution.institution_id];
    this.allCities = this.allCities;
    this.city = this.allCities[this.city.city_id];
  }

  submit(): void {
    this.institutionInstitution = this.institutionForm.get('inputInstitutionInstitution')?.value;
    this.institutionCityId = this.institutionForm.get('inputInstitutionCityId')?.value;
    this.dataService.postInstitution(this.institutionInstitution, this.institutionCityId).subscribe({
      next: () => {
        window.location.reload();
        this.modalService.open(this.activeModal);
      },
      error: err => 'Error en el ingreso de nueva institución',
    });
  }

  close() {
    this.submit();
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.close();
  }
}
