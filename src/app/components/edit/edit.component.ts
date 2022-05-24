import {Component, Input, OnInit} from '@angular/core';
import {faPen, faTrashCan, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";
import {DataService} from "../../common/data.service";
import {TokenStorageService} from "../../common/token-storage.service";
import {ChangeComponent} from "./change/change.component";
import {IInstitution} from "../card/institution";
import {ICity} from "../card/city";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;
  isLoggedIn!: boolean;

  faPen = faPen;
  faTrashCan = faTrashCan;
  faSquarePlus = faSquarePlus;

  allInstitution!: IInstitution[];
  allCities!: ICity[];

  constructor(private dataService: DataService, private tokenStorageService: TokenStorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
    this.dataService.getAllInstitutions().subscribe({
      next: institutions => {
        this.allInstitution = institutions;
      },
      error: err => 'Error al recibir instituciones en edit component',
    });
    this.dataService.getAllCities().subscribe({
      next: cities => {
        this.allCities = cities;
      },
      error: err => 'Error al recibir ciudades en edit component',
    });
  }

  openDeleteModal(){
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.dataId = this.dataId;
    modalRef.componentInstance.cardType = this.cardType;
    modalRef.componentInstance.dataTitle = this.dataTitle;
    modalRef.componentInstance.cardAlias = this.cardAlias;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    }

  public openAddModal(){
    const modalRef = this.modalService.open(AddComponent);
    modalRef.componentInstance.cardType = this.cardType;
    modalRef.componentInstance.cardAlias = this.cardAlias;
    modalRef.componentInstance.allInstitutions = this.allInstitution;
    modalRef.componentInstance.allCities = this.allCities;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });

  }

  openChangeModal(){
    const modalRef = this.modalService.open(ChangeComponent);
    modalRef.componentInstance.dataId = this.dataId;
    modalRef.componentInstance.cardType = this.cardType;
    modalRef.componentInstance.dataTitle = this.dataTitle;
    modalRef.componentInstance.cardAlias = this.cardAlias;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

}
