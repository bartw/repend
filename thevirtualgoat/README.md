# The Virtual Goat

https://www.youtube.com/watch?v=_Te5z6R904M

```Dockerfile
FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./index.js /app/index.js
CMD ["npm", "start"]
```

```yml
repend:
  build: . 
```

```shell
docker-compose up
```