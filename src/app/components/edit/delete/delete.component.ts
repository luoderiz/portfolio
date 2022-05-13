import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../common/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() dataId!: number;
  @Input() cardType!: string;
  @Input() dataTitle!: string;
  @Input() cardAlias!: string;

  constructor(private dataService: DataService, public modal: NgbActiveModal, private _modalService: NgbActiveModal) { }

  ngOnInit(): void {
    this.dataTitle = this.dataTitle;
    this.cardAlias = this.cardAlias;
  }

  delete(): void {
    if (this.cardType === "about") {
      this.dataService.deleteAbout(this.dataId).subscribe();
      console.log(`User wants to delete ${this.dataId}`);
      /*
    } else if (this.cardType === "professional") {
          this.dataService.deleteAbout(this.dataId).subscribe();
      console.log(`User wants to delete ${this.dataId}`);

    } else if (this.cardType === "education") {
*/
    } else if (this.cardType === "hardskills") {
      this.dataService.deleteHardSkill(this.dataId).subscribe();
      console.log(`User wants to delete ${this.dataId}`);
      this.modal.close('Eliminar');
    } else if (this.cardType === "softskills") {
      this.dataService.deleteSoftSkill(this.dataId).subscribe();
      console.log(`User wants to delete ${this.dataId}`);
      this.modal.close('Eliminar');
    } else if (this.cardType === "projects") {
      this.dataService.deleteProject(this.dataId).subscribe();
      console.log(`User wants to delete ${this.dataId}`);
      this.modal.close('Eliminar');
    }

  }

}
