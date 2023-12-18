FROM node:16-alpine

WORKDIR /app

COPY ./web3Event .

RUN npm install

CMD ["node", "script.js"]
