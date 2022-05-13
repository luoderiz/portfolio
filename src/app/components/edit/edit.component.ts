import {Component, Input} from '@angular/core';
import {faPen, faTrashCan, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";
import {DataService} from "../../common/data.service";
import {TokenStorageService} from "../../common/token-storage.service";
import {ChangeComponent} from "./change/change.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;
  isLoggedIn!: boolean;

  faPen = faPen;
  faTrashCan = faTrashCan;
  faSquarePlus = faSquarePlus;

  constructor(private dataService: DataService, private tokenStorageService: TokenStorageService, private modalService: NgbModal) { }

  OnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
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



  openAddModal(){
    const modalRef = this.modalService.open(AddComponent);
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
