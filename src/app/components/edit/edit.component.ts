import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../common/data.service";
import {TokenStorageService} from "../../common/token-storage.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() dataId!: number;
  about!: string;
  user!: any;

  constructor(private dataService: DataService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.about = "Soy bastante malosiento";
    this.dataService.postAbout(this.about).subscribe();
    console.log(`User wants to post ${this.about} on ${this.user}`);
  }

  alter(): void {

  }

  delete(): void {
    this.dataService.deleteAbout(this.dataId).subscribe();
    console.log(`User wants to delete ${this.dataId}`);
  }

}
