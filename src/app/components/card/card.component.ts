import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  aboutme: any[] = [
    "competency: example of computer skills and duty + result achieved",
  ];

  workexperience: any[] = [
    {
      position: "profesora de lengua y literatura en educación secundaria",
      period: "02/2022 - actualidad",
      employer: "Escuela Normal Superior N°2 D.E. 6 &quot;Mariano Acosta&quot;",
      details: "Cuarto año",
      field: "educación",
      area: "secundaria",
    },
    {
      position: "profesora de lengua y literatura en educación secundaria",
      period: "03/2021 - actualidad",
      employer: "Instituto Santa Ana y San Joaquín",
      details: "Tercer y cuarto año",
      field: "educación",
      area: "secundaria",
    },
    {
      position: "profesora de lengua y literatura en educación secundaria",
      period: "09/2019 - actualidad",
      employer: "Escuela Técnica N°9 D.E. 7 &quot;Ing. Luis A. Huergo&quot;",
      details: "Cuarto año",
      field: "educación",
      area: "secundaria",
    },
    {
      position: "profesora de lengua y literatura en educación secundaria",
      period: "09/2019 - 02/2021",
      employer: "Escuela de Comercio N°18 D.E. 5 &quot;Ing. Reino de Suecia&quot;",
      details: "Primer y segundo año",
      field: "educación",
      area: "secundaria",
    },
    {
      position: "profesora de biología en educación secundaria",
      period: "09/2019 - 05/2021",
      employer: "Escuela Técnica N°32 D.E. 14 &quot;Gral. José de San Martín&quot;",
      details: "Primer año. Proyecto Interareal Secundaria del Futuro.",
      field: "educación",
      area: "secundaria",
    },
    {
      position: "profesora de educación primaria",
      period: "02/2011 - 12/2015",
      employer: "Instituto Santa Cruz",
      details: "Maestra de cuarto grado. Enseñanza de todas las áreas curriculares. Un curso de 35 alumnos.",
      field: "educación",
      area: "primaria",
    },
    {
      position: "profesora de educación primaria",
      period: "02/2016 - 12/2016",
      employer: "Instituto San Francisco de Sales",
      details: "Maestra de segundo grado. Enseñanza de todas las áreas curriculares. Un curso de 42 alumnos.",
      field: "educación",
      area: "primaria",
    },
    {
      position: "profesora de educación primaria",
      period: "02/2017 - 12/2019",
      employer: "Instituto Santa Cruz",
      details: "Maestra por área en sexto grado.Enseñanza de prácticas del lenguaje. Tres cursos de 35 alumnos.",
      field: "educación",
      area: "primaria",
    },
    {
      position: "profesora de inglés en nivel primario",
      period: "02/2008 - 02/2012",
      employer: "Instituto Santa Cruz",
      details: "Segundo grado. Un curso de 35 alumnos.",
      field: "educación",
      area: "primaria",
    },
    {
      position: "profesora auxiliar de ingles en nivel primario",
      period: "04/2007 - 12/2007",
      employer: "Instituto Santa Cruz",
      details: "Primer grado. Tres divisiones con 35 alumnos.",
      field: "educación",
      area: "primaria",
    },
    {
      position: "vendedora",
      period: "04/2007 - 12/2007",
      employer: "Juguetería City Kids",
      details: "Atención al cliente. Asesoramiento y ventas.",
      field: "comercial",
      area: "ventas",
    },
  ];
  education: any[] = [
    {
      degree: "Profesora para el Nivel Primario o Equivalentes",
      since: "03/2008",
      to: "11/2010",
      institution: "Profesorado Sagrado Corazón",
      city: "Ciudad de Buenos Aires",
      field: "educación",
    },
    {
      degree: "Licenciada en Letras",
      since: "03/2007",
      to: "10/2019",
      institution: "Universidad de Buenos Aires",
      city: "Ciudad de Buenos Aires",
      field: "educación",
    },
    {
      degree: "Profesora de Enseñanza Media y Superior en Letras",
      since: "03/2007",
      to: "12/2020",
      institution: "Universidad de Buenos Aires",
      city: "Ciudad de Buenos Aires",
      field: "educación",
    },
    {
      degree: "Licenciatura en Computación",
      since: "03/2021",
      to: "en curso",
      institution: "Universidad de Buenos Aires",
      city: "Ciudad de Buenos Aires",
      field: "educación",
    },
    {
      degree: "Certificada &#35;Sé Programar. Argentina Programa.",
      since: "08/2021",
      to: "10/2021",
      institution: "CESSI & Ministerio de Desarrollo Productivo",
      city: "Argentina",
      field: "informática",
    },
    {
      degree: "Certificación &#35;Yo Programo. Argentina Programa.",
      since: "12/2021",
      to: "en curso",
      institution: "CESSI & Ministerio de Desarrollo Productivo",
      city: "Argentina",
      field: "informática",
    },
  ];
  softskills: any[] = [
    "actitud crítica y reflexiva",
    "habilidades organizativas",
    "anticipación de emergentes",
    "colaboración y trabajo en equipo",
    "iniciativa e innovación",
    "escucha activa",
    "empatía e integridad", 
    "mediación y resolución de conflictos",
    ];
  hardskills: any[] = [
    "HTML, Javascript, CSS",
    "Copywriting",
    "Copyediting",
    "Storytelling",
  ];
  languageskills: any[] = [
    "Inglés C1",
    "Francés A2",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
