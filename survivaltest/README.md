# Survival Test

https://www.youtube.com/watch?v=7y62rlhaAbU

```yml
version: '2'

services:
  db:
    image: postgres:latest
    environment:
      - POSTGRES_USER=repender
      - POSTGRES_PASSWORD=r3p3nd
      - POSTGRES_DB=repend
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
      - node_modules:/server/node_modules

  sut:
    build: .
    ports:
      - "3001:3000"
    entrypoint: npm run test:watch
    volumes:
      - ./server:/server
      - node_modules:/server/node_modules

volumes:
  pgdata:
  node_modules:
```

```json
{
  "name": "repend-survivaltest",
  "version": "0.0.1",
  "description": "https://www.youtube.com/watch?v=7y62rlhaAbU",
  "main": "index.js",
  "scripts": {
    "start": "nodemon -L index.js",
    "test": "mocha",
    "test:watch": "mocha --watch"
  },
  "author": "Bart Wijnants",
  "license": "MIT",
  "dependencies": {
    "express": "^4.14.0",
    "pg-promise": "^5.5.0"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.2.0",
    "nodemon": "^1.11.0"
  }
}
```

```js
const chai = require('chai');
const expect = chai.expect;

describe('test', () => {
    it('given two numbers when add then the sum is calculated', () => {
        const a = 1;
        const b = 2;

        expect(a + b).to.equal(3);
    })
});
```