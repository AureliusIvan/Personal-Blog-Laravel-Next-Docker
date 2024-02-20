# this is the file needed to build the client (react part) image
FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]