export const URL_BACKEND_ATHLETE = process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string + '/sv-athlete/api/v1' : 'http://localhost:3000/sv-athlete/api/v1';
export const URL_BACKEND_TRAINING =  process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string + '/sv-training/api/v1' : 'http://localhost:3002/sv-training/api/v1';
export const URL_BACKEND_PROFILES =  process.env["NG_APP_ENV"] === 'prod' ? process.env["NG_APP_PROD_URL"] as string + '/sv-profiles/api/v1' : 'http://localhost:3001/sv-profiles/api/v1';
export const TOKEN = 'sport_app_token';

