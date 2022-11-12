### STAGE 1: Build ###
FROM node:16.3.0-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

ARG NG_APP_PROD_URL_ARG
ENV NG_APP_PROD_URL=$NG_APP_PROD_URL_ARG

RUN npm run build:prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/sport-app-front-2 /usr/share/nginx/html
EXPOSE 8888