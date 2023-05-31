FROM node:18-alipne

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install 


COPY . .

RUN npm run build

CMD ['node', 'dist/main.js']