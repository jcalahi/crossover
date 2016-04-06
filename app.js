/* global __dirname, process */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express(); // jshint ignore:line
var PORT = process.env.PORT || 8000;

app.use(session({
    secret: 'hireme',
    name: 'uid',
    resave: true,
    saveUninitialized: false,
    cookie: {
    	expires: false,
    	maxAge: 900000
    },
    username: ''
}));

app.use('/myapplication', express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/node_modules')));

app.use(favicon(path.join(__dirname + '/public/images/favicon.ico')));

app.use('/myapplication', require('./server/routes/check-session'));
app.use('/myapplication', require('./server/routes/create-user'));

app.listen(PORT, function() {
    console.log('Server started on port:', PORT);
});



