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
        menuText: "Soft skills",
      },
      {
        menuId: 2,
        menuText: "Hard skills",
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
      icon: "Family",
      imageUrl: "../../assets/icons/family.png",
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
    },
    {
      icon: "Bird",
      imageUrl: "../../assets/icons/origami/bird.png",
      type: "softskills"
    },
    {
      icon: "Boat",
      imageUrl: "../../assets/icons/origami/boat.png",
      type: "softskills"
    },
    {
      icon: "Butterfly",
      imageUrl: "../../assets/icons/origami/butterfly.png",
      type: "softskills"
    },
    {
      icon: "Crab",
      imageUrl: "../../assets/icons/origami/crab.png",
      type: "softskills"
    },
    {
      icon: "Fox",
      imageUrl: "../../assets/icons/origami/fox.png",
      type: "softskills"
    },
    {
      icon: "Kangaroo",
      imageUrl: "../../assets/icons/origami/kangaroo.png",
      type: "softskills"
    },
    {
      icon: "Panda",
      imageUrl: "../../assets/icons/origami/panda.png",
      type: "softskills"
    },
    {
      icon: "Cactus",
      imageUrl: "../../assets/icons/origami/cactus.png",
      type: "softskills"
    },
    {
      icon: "Alpaca",
      imageUrl: "../../assets/icons/origami/alpaca.png",
      type: "softskills"
    },
    {
      icon: "Dove",
      imageUrl: "../../assets/icons/origami/dove.png",
      type: "softskills"
    },
    {
      icon: "Fish",
      imageUrl: "../../assets/icons/origami/fish.png",
      type: "hardskills"
    },
    {
      icon: "Seahorse",
      imageUrl: "../../assets/icons/origami/seahorse.png", 
      type: "hardskills"
    },
    {
      icon: "Swan",
      imageUrl: "../../assets/icons/origami/swan.png",
      type: "hardskills"
    },
    {
      icon: "Walrus",
      imageUrl: "../../assets/icons/origami/walrus.png",
      type: "hardskills"
    },
    {
      icon: "Dolphin",
      imageUrl: "../../assets/icons/origami/dolphin.png",
      type: "hardskills"
    },
    {
      icon: "Cat",
      imageUrl: "../../assets/icons/origami/cat.png",
      type: "hardskills"
    },
    {
      icon: "Bear",
      imageUrl: "../../assets/icons/origami/bear.png",
      type: "hardskills"
    },
    {
      icon: "Elephant",
      imageUrl: "../../assets/icons/origami/elephant.png",
      type: "hardskills"
    },
    {
      icon: "Dinosaur",
      imageUrl: "../../assets/icons/origami/dinosaur.png",
      type: "hardskills"
    },    
    {
      icon: "Parrot",
      imageUrl: "../../assets/icons/origami/parrot.png",
      type: "hardskills"
    },
    {
      icon: "Penguin",
      imageUrl: "../../assets/icons/origami/penguin.png",
      type: "hardskills"
    },
    {
      icon: "Squirrel",
      imageUrl: "../../assets/icons/origami/squirrel.png",
      type: "hardskills"
    },
    {
      icon: "Bambu",
      imageUrl: "../../assets/icons/plants/bambu.png",
      type: "projects"
    },
    {
      icon: "Flower",
      imageUrl: "../../assets/icons/plants/flower.png",
      type: "projects"
    },
    {
      icon: "Lilly",
      imageUrl: "../../assets/icons/plants/lilly/.png",
      type: "projects"
    },
    {
      icon: "Herbs",
      imageUrl: "../../assets/icons/plants/herbs.png",
      type: "projects"
    },
    {
      icon: "Tulip",
      imageUrl: "../../assets/icons/plants/tulip.png",
      type: "projects"
    },
    {
      icon: "Orquid",
      imageUrl: "../../assets/icons/plants/orquid.png",
      type: "projects"
    },
  ]
}
