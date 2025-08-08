# Używamy oficjalnego obrazu Node.js jako bazy
FROM node:18-alpine

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Kopiujemy plik package.json i package-lock.json (jeśli istnieje)
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy cały kod aplikacji
COPY . .

# Ustawiamy port, na którym aplikacja będzie nasłuchiwać
EXPOSE 3000

# Uruchamiamy aplikację
CMD ["npm", "run", "start:dev"]