const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include(__dirname + '/routes')
    .then('/models')
    .then('/controllers')
    .into(app);

module.exports = app;