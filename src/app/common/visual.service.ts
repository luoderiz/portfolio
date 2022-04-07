import { Injectable } from '@angular/core';
import { IMilestone } from '../components/milestone/milestone';
import { IMenu } from '../components/navbutton/menu';

@Injectable({
  providedIn: 'root'
})

export class VisualService {
    
    getAllMenues(): IMenu[] {
        return this.allMenues;
      };
    
      getSpecifictMenu(menuPosition: number): IMenu {
        return this.allMenues[menuPosition];
      };
    
      getMilestones(type: string): IMilestone[] {
        return this.allMilestones.filter(
            (aMilestone: IMilestone) => aMilestone.type === type  
            )
        };
    
      getCurrentMilestone(pathNumber: number, type: string): IMilestone {
        return this.getMilestones(type)[pathNumber];
      };
    
    allMenues: IMenu[] =
    [
      {
        menuId: 0,
        menuText: "Sobre mí",
      },
      {
        menuId: 1,
        menuText: "Soft Skills",
      },
      {
        menuId: 2,
        menuText: "Hard Skills",
      },
      {
        menuId: 3,
        menuText: "Formación y experiencia",
      },
      {
        menuId: 4,
        menuText: "Proyectos",
      },
      {
        menuId: 5,
        menuText: "Cambiar a modo bitácora",
      }
    ];
  
    allMilestones: IMilestone[] = [
    {
      icon: "Certificate",
      imageUrl: "../../assets/icons/education/certificate.png",
      type: "profesional"
    }, 
    {
      icon: "Degree",
      imageUrl: "../../assets/icons/education/degree.png",
      type: "profesional"
    },
    {
      icon: "Growth",
      imageUrl: "../../assets/icons/careeradvancement/growth.png",
      type: "profesional"
    },
    {
      icon: "Career2",
      imageUrl: "../../assets/icons/careeradvancement/career2.png",
      type: "profesional"
    },
    {
      icon: "Creativity",
      imageUrl: "../../assets/icons/careeradvancement/creativity.png",
      type: "profesional"
    },
    {
      icon: "User",
      imageUrl: "../../assets/icons/careeradvancement/user.png",
      type: "profesional"
    },
    {
      icon: "Leadership",
      imageUrl: "../../assets/icons/careeradvancement/leadership.png",
      type: "profesional"
    },
    {
      icon: "Career",
      imageUrl: "../../assets/icons/careeradvancement/career.png",
      type: "profesional"
    },
    {
      icon: "Search",
      imageUrl: "../../assets/icons/careeradvancement/search.png",
      type: "profesional"
    },
    {
      icon: "Baby-crib",
      imageUrl: "../../assets/icons/baby-crib.png",
      type: "aboutme"
    },  
    {
      icon: "House",
      imageUrl: "../../assets/icons/house.png",
      type: "aboutme"
    },
    {
      icon: "Park",
      imageUrl: "../../assets/icons/park.png",
      type: "aboutme"
    },
    {
      icon: "Postcard",
      imageUrl: "../../assets/icons/postcard.png",
      type: "aboutme"
    },  
    {
      icon: "Book",
      imageUrl: "../../assets/icons/book.png",
      type: "aboutme"
    },
    {
      icon: "Hug",
      imageUrl: "../../assets/icons/hug.png",
      type: "aboutme"
    },
    {
      icon: "Hiking",
      imageUrl: "../../assets/icons/hiking.png",
      type: "aboutme"
    },
    {
      icon: "Ufo",
      imageUrl: "../../assets/icons/ufo.png",
      type: "aboutme"
    },
    {
      icon: "Windmill",
      imageUrl: "../../assets/icons/windmill.png",
      type: "aboutme"
    }
  ]
}
