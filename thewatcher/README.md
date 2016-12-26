# The Watcher

https://www.youtube.com/watch?v=04seFO6BEmw

Move package.json and index.js to new server folder

```json
"scripts": {
    "start": "nodemon -L index.js"
},
"devDependencies": {
    "nodemon": "^1.11.0"
}
```

```Dockerfile
FROM node:latest
RUN mkdir /server
WORKDIR /server
COPY ./server/package.json /server/package.json
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

```yml
volumes:
  - ./server:/server
  - /server/node_modules
```

```shell
docker-compose up
```

Browse to [http://localhost:3000/](http://localhost:3000/)

Change some js.

Browse to [http://localhost:3000/](http://localhost:3000/)