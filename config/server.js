const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const appPath = path.dirname(require.main.filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', '/views');

app.use(express.static(appPath + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include(appPath + '/routes')
    .then(appPath + '/controllers')
    .into(app);

module.exports = app;