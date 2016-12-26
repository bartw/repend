(() => {
    'use strict';

    const express = require('express');
    const pgp = require('pg-promise')();
    const db = pgp('postgres://repender:r3p3nd@db:5432/repend');
    const app = express();

    app.get('/', (req, res) => {
        db.query('select * from foo').then(data => {
            res.send('Data:' + JSON.stringify(data));
        }).catch(error => {
            res.send('Error:' + error);
        });
    });

    app.post('/', (req, res) => {
        db.query('INSERT INTO foo (bar, baz) VALUES (\'staples\', 666);').then(data => {
            res.send('Inserted');
        }).catch(error => {
            res.send('Error:' + error);
        });
    })

    app.listen(3000, () => {
        console.log('save the children');
    });
})();