FROM node:14.16-alpine3.12

RUN apk --no-cache add curl

WORKDIR /deployment

COPY . .

RUN yarn

CMD node index.js
