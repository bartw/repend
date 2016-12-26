(function () {
    const express = require('express')
    const app = express();

    app.get('/', function (req, res) {
        res.send('I\'m droppin\' flavor, my behavior is hereditary. But my technique is very necessary.');
    });

    app.listen(3000, function () {
        console.log('express yourself');
    });
})();