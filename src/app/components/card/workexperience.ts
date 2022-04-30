import { IInstitution } from "./institution";

export interface IWorkexperience {
    id: number;
    position: string;
    date_from: string;
    date_to: string;
    details: string;
    institution: IInstitution;
    person_id: number;
    tag: Array<string>;
  };
