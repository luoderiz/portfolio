import { Injectable } from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IMilestone } from '../components/milestone/milestone';
import { IAboutMe } from '../components/card/aboutme';
import { IMenu } from '../components/navbutton/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allAboutMe: IAboutMe[] = 
  [
    {
      fact1: "Soy de Ramos Mejía, Provincia de Buenos Aires",
      fact2: "Actualmente vivo en Caballito, Ciudad de Buenos Aires",
      fact3: "",
    },
    {
      fact1: "algo",
      fact2: "",
      fact3: "",
    },
    {
      fact1: "",
      fact2: "que ",
      fact3: "",
    },
    {
      fact1: "",
      fact2: "",
      fact3: "y",
    },
    {
      fact1: "",
      fact2: "",
      fact3: "",
    },
  ];

  allMenues: IMenu[] =
  [
    {
      menuId: 0,
      menuText: "Sobre mí",
    },
    {
      menuId: 1,
      menuText: "Skills",
    },
    {
      menuId: 2,
      menuText: "Formación y experiencia",
    },
    {
      menuId: 3,
      menuText: "Proyectos",
    },
  ];

  allWorkExperience: IWorkexperience[] =
    [
      {
        position: "vendedora",
        periodFrom: "04/2007",
        periodTo: "12/2007",
        employer: "Juguetería City Kids",
        details: "Atención al cliente. Asesoramiento y ventas.",
      },
      {
        position: "profesora auxiliar de ingles en nivel primario",
        periodFrom: "04/2007",
        periodTo: "12/2007",
        employer: "Instituto Santa Cruz",
        details: "Primer grado. Tres divisiones con 35 alumnos.",
      },
      {
        position: "profesora de inglés en nivel primario",
        periodFrom: "02/2008",
        periodTo: "02/2012",
        employer: "Instituto Santa Cruz",
        details: "Segundo grado. Un curso de 35 alumnos.",
      },
      {
        position: "profesora de educación primaria",
        periodFrom: "02/2017", 
        periodTo: "12/2019",
        employer: "Instituto Santa Cruz",
        details: "Maestra por área en sexto grado.Enseñanza de prácticas del lenguaje. Tres cursos de 35 alumnos.",
      },
      {
        position: "profesora de educación primaria",
        periodFrom: "02/2016",
        periodTo: "12/2016",
        employer: "Instituto San Francisco de Sales",
        details: "Maestra de segundo grado. Enseñanza de todas las áreas curriculares. Un curso de 42 alumnos.",
      },
      {
        position: "profesora de educación primaria",
        periodFrom: "02/2011",
        periodTo: "12/2015",
        employer: "Instituto Santa Cruz",
        details: "Maestra de cuarto grado. Enseñanza de todas las áreas curriculares. Un curso de 35 alumnos.",
      },
      {
        position: "profesora de biología en educación secundaria",
        periodFrom: "09/2019",
        periodTo: "05/2021",
        employer: "Escuela Técnica N°32 D.E. 14 \"Gral. José de San Martín\"",
        details: "Primer año. Proyecto Interareal Secundaria del Futuro.",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "09/2019",
        periodTo: "02/2021",
        employer: "Escuela de Comercio N°18 D.E. 5 \"Ing. Reino de Suecia\"",
        details: "Primer y segundo año",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "09/2019",
        periodTo: "actualidad",
        employer: "Escuela Técnica N°9 D.E. 7 \"Ing. Luis A. Huergo\"",
        details: "Cuarto año",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "03/2021",
        periodTo: "actualidad",
        employer: "Instituto Santa Ana y San Joaquín",
        details: "Tercer y cuarto año",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "02/2022",
        periodTo: "actualidad",
        employer: "Escuela Normal Superior N°2 D.E. 6 \"Mariano Acosta\"",
        details: "Cuarto año",
      }
    ];

    allMilestones: IMilestone[] = 
    [
      {
        icon: "Certificate",
        imageUrl: "../../assets/icons/education/certificate.png",
        type: "profesional",
      }, 
      {
        icon: "Degree",
        imageUrl: "../../assets/icons/education/degree.png",
        type: "profesional",
      },
      {
        icon: "Growth",
        imageUrl: "../../assets/icons/careeradvancement/growth.png",
        type: "profesional",
      },
      {
        icon: "Career2",
        imageUrl: "../../assets/icons/careeradvancement/career2.png",
        type: "profesional",
      },
      {
        icon: "Creativity",
        imageUrl: "../../assets/icons/careeradvancement/creativity.png",
        type: "profesional",
      },
      {
        icon: "User",
        imageUrl: "../../assets/icons/careeradvancement/user.png",
        type: "profesional",
      },
      {
        icon: "Leadership",
        imageUrl: "../../assets/icons/careeradvancement/leadership.png",
        type: "profesional",
      },
      {
        icon: "Career",
        imageUrl: "../../assets/icons/careeradvancement/career.png",
        type: "profesional",
      },
      {
        icon: "Search",
        imageUrl: "../../assets/icons/careeradvancement/search.png",
        type: "profesional",
      },
      {
        icon: "Key",
        imageUrl: "../../assets/icons/careeradvancement/key.png",
        type: "profesional",
      },
      {
        icon: "House",
        imageUrl: "../../assets/icons/house.png",
        type: "aboutme",
      },  
      {
        icon: "Airplane",
        imageUrl: "../../assets/icons/airplane.png",
        type: "aboutme",
      },
      {
        icon: "Apple",
        imageUrl: "../../assets/icons/apple.png",
        type: "aboutme",
      },
      {
        icon: "Windmill",
        imageUrl: "../../assets/icons/windmill.png",
        type: "aboutme",
      },  
      {
        icon: "Dolphin",
        imageUrl: "../../assets/icons/dolphin.png",
        type: "aboutme",
      },
      {
        icon: "",
        imageUrl: "",
        type: "aboutme",
      },
      {
        icon: "",
        imageUrl: "",
        type: "aboutme",
      },  
      {
        icon: "",
        imageUrl: "",
        type: "aboutme",
      },
      {
        icon: "",
        imageUrl: "",
        type: "aboutme",
      },
    ];
  
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

  getWorkExperience(): IWorkexperience[] {
    return this.allWorkExperience;
  };

  getCurrentWorkExperience(pathNumber: number): IWorkexperience {
    return this.allWorkExperience[pathNumber];
  };

  getAboutMe(): IAboutMe[] {
    return this.allAboutMe;
  };

  getCurrentAboutMe(pathNumber: number): IAboutMe {
    return this.allAboutMe[pathNumber];
  };

};



/*     workExperienceMilestone: [] = [
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
    ]
 */    

