export const URL_BACKEND_ATHLETE = process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string : 'http://localhost:3000/api/v1';
export const URL_BACKEND_TRAINING =  process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string : 'http://localhost:3002/api/v1';
export const URL_BACKEND_PROFILES =  process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string : 'http://localhost:3001/api/v1';
export const TOKEN = 'sport_app_token';

