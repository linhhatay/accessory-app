const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = 3000;
const app = express();
const route = require('./routes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));

//ROUTES
route(app);

module.exports = app;
