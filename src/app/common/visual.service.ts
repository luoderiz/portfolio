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

      getSpecificMenu(menuPosition: number): IMenu {
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
        menuText: "Formación",
      },
      {
        menuId: 2,
        menuText: "Recorridos profesionales",
      },
      {
        menuId: 3,
        menuText: "Hard skills",
      },
      {
        menuId: 4,
        menuText: "Soft skills",
      },
      {
        menuId: 5,
        menuText: "Proyectos",
      }
    ];

    allMilestones: IMilestone[] = [
    {
      icon: "Certificate",
      imageUrl: "../../assets/icons/professional/businesswoman.png",
      type: "professional"
    },
    {
      icon: "Degree",
      imageUrl: "../../assets/icons/professional/network1.png",
      type: "professional"
    },
    {
      icon: "Growth",
      imageUrl: "../../assets/icons/professional/growth.png",
      type: "professional"
    },
    {
      icon: "Career2",
      imageUrl: "../../assets/icons/professional/career2.png",
      type: "professional"
    },
    {
      icon: "Creativity",
      imageUrl: "../../assets/icons/professional/creativity.png",
      type: "professional"
    },
    {
      icon: "User",
      imageUrl: "../../assets/icons/professional/connection.png",
      type: "professional"
    },
    {
      icon: "Leadership",
      imageUrl: "../../assets/icons/professional/leadership.png",
      type: "professional"
    },
    {
      icon: "Career",
      imageUrl: "../../assets/icons/professional/career.png",
      type: "professional"
    },
    {
      icon: "Search",
      imageUrl: "../../assets/icons/professional/success.png",
      type: "professional"
    },
    {
      icon: "Family",
      imageUrl: "../../assets/icons/about/family.png",
      type: "about"
    },
    {
      icon: "House",
      imageUrl: "../../assets/icons/about/house.png",
      type: "about"
    },
    {
      icon: "Park",
      imageUrl: "../../assets/icons/about/park.png",
      type: "about"
    },
    {
      icon: "Postcard",
      imageUrl: "../../assets/icons/about/postcard.png",
      type: "about"
    },
    {
      icon: "Book",
      imageUrl: "../../assets/icons/about/book.png",
      type: "about"
    },
    {
      icon: "Hug",
      imageUrl: "../../assets/icons/about/hug.png",
      type: "about"
    },
    {
      icon: "Hiking",
      imageUrl: "../../assets/icons/about/hiking.png",
      type: "about"
    },
    {
      icon: "Ufo",
      imageUrl: "../../assets/icons/about/ufo.png",
      type: "about"
    },
    {
      icon: "Windmill",
      imageUrl: "../../assets/icons/about/windmill.png",
      type: "about"
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
      imageUrl: "../../assets/icons/plants/lilly.png",
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
    {
      icon: "Sakura",
      imageUrl: "../../assets/icons/plants/sakura.png",
      type: "projects"
    },
    {
      icon: "Bonsai",
      imageUrl: "../../assets/icons/plants/bonsai.png",
      type: "projects"
    },
    {
      icon: "Rose",
      imageUrl: "../../assets/icons/plants/rose.png",
      type: "projects"
    },
    {
      icon: "Certificate",
      imageUrl: "../../assets/icons/education/certificate.png",
      type: "education"
    },
    {
      icon: "Certificate",
      imageUrl: "../../assets/icons/education/certificate2.png",
      type: "education"
    },
    {
      icon: "Certificate",
      imageUrl: "../../assets/icons/education/certificate3.png",
      type: "education"
    },
    {
      icon: "Degree",
      imageUrl: "../../assets/icons/education/degree.png",
      type: "education"
    },
    {
      icon: "Degree",
      imageUrl: "../../assets/icons/education/degree2.png",
      type: "education"
    },
    {
      icon: "Degree",
      imageUrl: "../../assets/icons/education/degree3.png",
      type: "education"
    },
    {
      icon: "Diploma",
      imageUrl: "../../assets/icons/education/diploma.png",
      type: "education"
    },
    {
      icon: "Diploma",
      imageUrl: "../../assets/icons/education/diploma2.png",
      type: "education"
    },
    {
      icon: "Diploma",
      imageUrl: "../../assets/icons/education/diploma3.png",
      type: "education"
    },
  ]
}
