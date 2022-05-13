import {Component, Input, Type, OnInit, OnChanges} from '@angular/core';
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

  constructor(private dataService: DataService, private tokenStorageService: TokenStorageService, private _modalService: NgbModal) { }

  MODALS: {[name: string]: Type<any>} = {
    deleteModal: DeleteComponent,
    addModal: AddComponent,
    changeModal: ChangeComponent
  };

  open(deleteModal: string) { this._modalService.open(DeleteComponent); }

  OnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
  }

  OnChanges(): void {
    this.isLoggedIn = this.tokenStorageService.isUserLoggedIn();
  }

}
