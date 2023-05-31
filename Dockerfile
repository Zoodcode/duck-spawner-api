FROM node:18.6.0-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install 


COPY . .

RUN npm run build

ENTRYPOINT ['node', 'dist/main.js']