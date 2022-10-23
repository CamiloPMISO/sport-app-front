import { City } from './city';
import { Gender } from './enums/gender.enum';
import { IDType } from './enums/idType.enum';
import { NutritionType } from './enums/nutritionType.enum';
import { PlanEnum } from './enums/plan.enum';
import { Risk } from './risk';
import { Sport } from './sport';
export class Athlete {
    id: string;
    completed: boolean;
    name: string;
    lastName: string
    idType: IDType;
    idNumber: string;
    gender: Gender;
    weight: number;
    height: number;
    email: string;
    password: string;
    cityOfBirth: City;
    cityOfResidence: City;
    sports: Sport[];
    nutritionType: NutritionType;
    trainingPlan: string;
    risks: Risk[];
    paymentPlan: PlanEnum;
    sportProfile: string;
    demographicProfile: string;
    foodProfile: string;
}
