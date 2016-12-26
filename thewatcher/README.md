# The Watcher

https://www.youtube.com/watch?v=04seFO6BEmw

Create a server folder and move package.json and index.js to this folder.

Add a dev dependency to nodemon and change the start script to use nodemon.

```json
"scripts": {
    "start": "nodemon -L index.js"
},
"devDependencies": {
    "nodemon": "^1.11.0"
}
```

Change the dockerfile to use the new server folder and only copy the package.json file.

```Dockerfile
FROM node:latest
RUN mkdir /server
WORKDIR /server
COPY ./server/package.json /server/package.json
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

Map the local server folder to the server folder in the container.

Make sure the generated node_modules folder is still available in the container.

```yml
volumes:
  - ./server:/server
  - /server/node_modules
```

Start the containers

```shell
docker-compose up
```

Browse to [http://localhost:3000/](http://localhost:3000/).

Change some js.

Browse to [http://localhost:3000/](http://localhost:3000/).

The new js is now loaded.