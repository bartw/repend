# Neva Forget

https://www.youtube.com/watch?v=PYVeIjkC_QA

Change to docker-compose.yml file to create a volume for the database data.

```yml
version: '2'

services:
  db:
    image: postgres:latest
    environment:
      - POSTGRES_USER=pender
      - POSTGRES_PASSWORD=p3nd
      - POSTGRES_DB=pend
      - PGDATA=/pgdata
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/pgdata
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql
  
  repend:
    build: .
    depends_on:
      - db
    ports:
      - "3000:3000"
    volumes:
      - ./server:/server
      - /server/node_modules

volumes:
  pgdata:
```

The database data is now saved in a separate volume and won't be deleted even if we delete the container.

```shell
docker-compose up
```

Use the following command to see the volume.

```shell
docker volume ls
```

There is a volume called "local nevaforget_pgdata".