FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /usr/src/app

# Kopiujemy OBA pliki - package.json i package-lock.json
COPY package*.json ./

# Używamy komendy 'npm ci', która jest szybsza i bardziej niezawodna dla Dockera
RUN npm ci

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]