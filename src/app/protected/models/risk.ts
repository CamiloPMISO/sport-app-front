import { Athlete } from "./athlete";

export class Risk {
    id: string;
    imcMin: number;
    imcMax: number;
    features: string;
    limitations: string;
    howToReduceIt: string;
    risk: number;
    athletes: Athlete[];
}
