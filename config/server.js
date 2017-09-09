const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const appDir = path.dirname(require.main.filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', appDir + '/views');

app.use(express.static(appDir + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include(appDir + '/routes')
    .then('/models')
    .then('/controllers')
    .into(app);

module.exports = app;