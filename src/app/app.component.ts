import { Component } from '@angular/core';
import {
  faEye,
  faLock,
  faPen,
  faShoePrints,
  faSquarePlus,
  faStreetView,
  faTrashCan,
  faUnlock,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private faIconLibrary: FaIconLibrary, private faConfig: FaConfig) {
    faIconLibrary.addIcons(faSquarePlus, faPen, faTrashCan, faUnlock, faLock, faEye, faStreetView, faShoePrints);
    faConfig.fixedWidth = true;
  }
  ngOnInit(): void {}
}
