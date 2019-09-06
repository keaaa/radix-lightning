FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install react-scripts@3.1.1 -g --silent
COPY package.json /app/package.json
RUN npm install --silent