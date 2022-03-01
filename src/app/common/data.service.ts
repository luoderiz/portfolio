import { Injectable } from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
        employer: "Escuela Técnica N°32 D.E. 14 &quot;Gral. José de San Martín&quot;",
        details: "Primer año. Proyecto Interareal Secundaria del Futuro.",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "09/2019",
        periodTo: "02/2021",
        employer: "Escuela de Comercio N°18 D.E. 5 &quot;Ing. Reino de Suecia&quot;",
        details: "Primer y segundo año",
      },
      {
        position: "profesora de lengua y literatura en educación secundaria",
        periodFrom: "09/2019",
        periodTo: "actualidad",
        employer: "Escuela Técnica N°9 D.E. 7 &quot;Ing. Luis A. Huergo&quot;",
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
        employer: "Escuela Normal Superior N°2 D.E. 6 &quot;Mariano Acosta&quot;",
        details: "Cuarto año",
      }
    ];

  getWorkExperience(): IWorkexperience[] {
    return this.allWorkExperience;
  };

  getCurrentWorkExperience(pathNumber: number): IWorkexperience {
    return this.allWorkExperience[pathNumber];
  };

};
