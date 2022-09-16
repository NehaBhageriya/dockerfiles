FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4005

CMD node app.js