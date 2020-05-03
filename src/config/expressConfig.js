const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const routes = require('../routes');

const app = express();

app.set(
  'views',
  path.resolve(__dirname, '..', '..', 'views')
);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

module.exports = app;
