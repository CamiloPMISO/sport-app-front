export enum ActivityType {
  TRAINING = 'training',
  EVENT = 'event',
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

export interface DataSoruce {
  Id: string;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  Description: string;
  CategoryColor: string;
  IsReadonly: boolean;
}

export interface Sport {
  readonly id: string;

  readonly name: string;
}

export interface TrainingPlan {
  id: string;
  trainingDays: TrainingDay[];
}
