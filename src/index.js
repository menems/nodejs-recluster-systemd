'use strict';

const express = require('express');
const app = module.exports = express();


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end('hello');
});

app.get('/error', (req, res) => {

    throw new Error('prout');
});

if(!module.parent)
    app.listen(port, () => {
        console.log('server listening on port ' + port);
    });
