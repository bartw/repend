# The Virtual Goat

https://www.youtube.com/watch?v=_Te5z6R904M

Make sure Docker and Compose are installed before starting this step.
Create a dockerfile and fill it with the following code.

```Dockerfile
FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./index.js /app/index.js
CMD ["npm", "start"]
```

Create a docker-compose.yml file and copy the next block in it.

```yml
version: '2'

services:
  repend:
    build: . 
```

Now everyone with Docker and Compose on their machine can start the project with the following command.

```shell
docker-compose up
```