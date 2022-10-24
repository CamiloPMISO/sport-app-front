import { Athlete } from './athlete';
import { Country } from './country';

export class City {
  id: string;
  name: string;
  country: Country;
  athletesCityOfBirth: Athlete[];
  athletesCityOfResidence: Athlete[];
}
