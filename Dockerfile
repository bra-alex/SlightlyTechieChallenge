FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "build/src/server.js"]