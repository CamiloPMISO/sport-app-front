export interface PostRegisterRequest {

    readonly name: string;
  
    readonly lastName: string;
  
    readonly age: number;
  
    readonly idType: string;
  
    readonly idNumber: string;
  
    readonly gender: string;
  
    readonly weight: number;
  
    readonly height: number;
  
    readonly cityOfBirth: string;
  
    readonly cityOfResidence: string;
  
    readonly sports: string[];
  
    readonly nutritionType: string;
  }

  export interface Country {
    
    readonly id : string;

    readonly name : string;

    readonly cities : City[]

  }

  export interface City {
    
    readonly id : string;

    readonly name : string;

  }

  export interface Sport {
    
    readonly id : string;

    readonly name : string;

  }