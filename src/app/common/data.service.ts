import { Injectable } from '@angular/core';
import { IWorkexperience } from '../components/card/workexperience';
import { IMilestone } from '../components/milestone/milestone';
import { IAboutMe } from '../components/card/aboutme';
import { IMenu } from '../components/navbutton/menu';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private workexperienceUrl: string = 'api/workexperience.json';
  private aboutmeUrl: string = 'api/aboutme.json';
  constructor(private http: HttpClient) {}

  getWorkExperience(): Observable<IWorkexperience[]> {
    return this.http.get<IWorkexperience[]>(this.workexperienceUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAboutme(): Observable<IAboutMe[]> {
    return this.http.get<IAboutMe[]>(this.aboutmeUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

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

}
