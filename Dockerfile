FROM node:alpine

WORKDIR /app

RUN npm update && npm upgrade
RUN npm i yarn -y
RUN apk add --update git

COPY ./package.json ./package.json

RUN yarn

CMD [ "yarn", "start" ]