/*
Interface for the Register Request (can look different, based on your backend api)
*/
export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface RegisterResponse {
  email: string;
}

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  username: string;
  password: string;
}

/*
Interface for the Login Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  token: string;
}
