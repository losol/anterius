FROM node:12

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Copying, build, run!
COPY . .
RUN npm run build
CMD [ "npm", "start" ]