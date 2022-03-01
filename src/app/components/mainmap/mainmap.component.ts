import { Component } from '@angular/core';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css'],
})

export class MainmapComponent {
  currentPosition: number = 0;

  path0 = {
    icon: "Certificate",
    imageUrl: "../../../assets/icons/education/certificate.png",
  }; 

  path1 = {
    icon: "Degree",
    imageUrl: "../../../assets/icons/education/degree.png",
  };

  path2 = {
    icon: "Growth",
    imageUrl: "../../../assets/icons/careeradvancement/growth.png",
  };
  
  path3 = {
    icon: "Career2",
    imageUrl: "../../../assets/icons/careeradvancement/career2.png",
  };
  
  path4 = {
    icon: "Creativity",
    imageUrl: "../../../assets/icons/careeradvancement/creativity.png",
  };
  
  path5 = {
    icon: "User",
    imageUrl: "../../../assets/icons/careeradvancement/user.png",
  };
  
  path6 = {
    icon: "Leadership",
    imageUrl: "../../../assets/icons/careeradvancement/leadership.png",
  };
  
  path7 = {
    icon: "Career",
    imageUrl: "../../../assets/icons/careeradvancement/career.png",
  }; 
  
  path8 = {
    icon: "Search",
    imageUrl: "../../../assets/icons/careeradvancement/search.png",
  };

  path9 = {
    icon: "Key",
    imageUrl: "../../../assets/icons/careeradvancement/key.png"
  };

  sendPath(pathNumber: number): void {
    this.currentPosition = pathNumber;
  }
};
