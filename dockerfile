FROM node:20.11.1

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["npm","start"]
