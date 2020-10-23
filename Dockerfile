FROM node:lts-alpine3.10

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Copying, build, run!
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]