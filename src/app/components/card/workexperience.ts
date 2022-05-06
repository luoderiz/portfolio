import { IInstitution } from "./institution";

export interface IWorkexperience {
    workexperience_id: number;
    position: string;
    date_from: string;
    date_to: string;
    details: string;
    person_id: number;
    tag: Array<string>;
    institution: IInstitution;
  };
