import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from "../../../common/data.service";

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

  constructor(private dataService: DataService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.delete();
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.close();
  }

  delete() {
    if (this.cardType === "about") {
      this.dataService.deleteAbout(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    } else if (this.cardType === "professional") {
      this.dataService.deleteWorkexperience(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    } else if (this.cardType === "education") {
      this.dataService.deleteEducation(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    } else if (this.cardType === "hardskills") {
      this.dataService.deleteHardSkill(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    } else if (this.cardType === "softskills") {
      this.dataService.deleteSoftSkill(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    } else if (this.cardType === "projects") {
      this.dataService.deleteProject(this.dataId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: err => `User wants to delete ${this.dataId}`,
      });
    }
  }
}
