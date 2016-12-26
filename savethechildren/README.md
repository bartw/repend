# Save The Children

https://www.youtube.com/watch?v=KHirsx8igRk

No app without a database.

Add a dependency to pg-promise in the package.json file.

```json
"dependencies": {
    "express": "^4.14.0",
    "pg-promise": "^5.5.0"
}
```

Require the new depency in index.js and use it in our api.

```js
(function () {
    const express = require('express');
    const pgp = require('pg-promise')();
    const db = pgp('postgres://repender:r3p3nd@db:5432/repend');
    const app = express();

    app.get('/', function (req, res) {
        db.query('select * from foo').then(function (data) {
            res.send('Data:' + JSON.stringify(data));
        }).catch(function (error) {
            res.send('Error:' + error);
        });
    });

    app.post('/', function (req, res) {
        db.query('INSERT INTO foo (bar, baz) VALUES (\'Run and take a leak-ah, stay and yo Eureka\', 666);').then(function (data) {
            res.send('Inserted');
        }).catch(function (error) {
            res.send('Error:' + error);
        });
    })

    app.listen(3000, function () {
        console.log('save the children');
    });
})();
```

Create a init.sql script to initialize the database.

```sql
CREATE TABLE IF NOT EXISTS foo
(
    id    SERIAL PRIMARY KEY NOT NULL,
    bar   VARCHAR(100) NOT NULL,
    baz   INTEGER NOT NULL
);
CREATE UNIQUE INDEX foo_id ON foo (id);

INSERT INTO foo (bar, baz) VALUES ('It''s the ill funk freaker, comin out your speaker', 42);
```

Create a new service in the docker-compose.yml that is based of the postgress image. Make th existing service depend on this new service.

```yml
version: '2'

services:
  db:
    image: postgres:latest
    environment:
      - POSTGRES_USER=repender
      - POSTGRES_PASSWORD=r3p3nd
      - POSTGRES_DB=repend
    ports:
      - "5432:5432"
    volumes:
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql
  repend:
    build: .
    depends_on:
      - db
    ports:
      - "3000:3000" 
```

Start the docker containers.

```shell
docker-compose up
```

Browse to [http://localhost:3000/](http://localhost:3000/)

Make a post to the api endpoint.

```shell
curl -X POST http://localhost:3000
```

or

```shell
Invoke-RestMethod 'http://localhost:3000' -Method Post
```

Browse to [http://localhost:3000/](http://localhost:3000/)

A record is added to the database.