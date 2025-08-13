FROM node:18-alpine

# Instalujemy pakiet systemowy, którego wymaga Prisma
RUN apk add --no-cache openssl

WORKDIR /usr/src/app

COPY package*.json ./

# Czysta, standardowa instalacja
RUN npm install

COPY . .

# Generowanie klienta Prisma jako część budowania obrazu
RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]