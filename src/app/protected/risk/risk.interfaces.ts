export interface Athlete {
    readonly id: number;
    readonly completed: boolean;
    readonly name: string;
    readonly lastName: string;
    readonly idType: string;
    readonly idNumber: number;
    readonly gender: string;
    readonly age: number;
    readonly weight: number;
    readonly height: number;
    readonly email: string;
    readonly nutritionType: string;
    readonly trainingPlan: string;
    readonly paymentPlan: string;
    readonly sportProfile: string;
    readonly demographicProfile: string;
    readonly foodProfile: string;
    readonly cityOfBirth: string[];
    readonly cityOfResidence: string[];
    readonly sports: Sport[];
    readonly risks: Risk[];
}

export interface Risk{
    readonly id: string;
    readonly imcMin: number;
    readonly imcMax: number;
    readonly features: string;
    readonly limitations: string;
    readonly howToReduceIt: string;
    readonly risk: number;
}

export interface Sport {
    readonly id: string;
    readonly name: string;
  }