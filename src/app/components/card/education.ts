import { IInstitution } from "./institution";

export interface IEducation {
    education_id: number;
    degree: string;
    date_from: string;
    date_to: string;
    institution: IInstitution;
    person_id: number;
    tag: Array<string>;
  };
