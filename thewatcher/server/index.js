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
        db.query('INSERT INTO foo (bar, baz) VALUES (\'staples\', 666);').then(function (data) {
            res.send('Inserted');
        }).catch(function (error) {
            res.send('Error:' + error);
        });
    })

    app.listen(3000, function () {
        console.log('save the children');
    });
})();