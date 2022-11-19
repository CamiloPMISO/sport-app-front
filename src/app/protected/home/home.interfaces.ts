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
}

export interface Sport {
    readonly id: string;
    readonly name: string;
  }

  export enum ActivityType {
    TRAINING = 'training',
    EVENT = 'event',
    ROUTE = 'route',
  }
  
  export interface Activity {
    id: string;
  
    name: string;
  
    type: ActivityType;
  
    image: string;
  
    duration: number;
  
    description: string;
  
    start_at: string;
  
    sport: string;
  }
  
  export interface TrainingDay {
    id: string;
  
    date: string;
  
    activities: Activity[];
  }
  
  
  export interface Sport {
    readonly id: string;
  
    readonly name: string;
  }
  
  export interface TrainingPlan {
    id: string;
    trainingDays: TrainingDay[];
  }
  