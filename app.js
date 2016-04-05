/* global __dirname, process */

var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');

var app = express(); // jshint ignore:line
var PORT = process.env.PORT || 8000;

app.use(session({
    secret: '12345',
    name: '',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use('/myapplication', express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/node_modules')));
app.use(favicon(path.join(__dirname + '/public/images/favicon.ico')));

app.use('/myapplication', require('./server/routes/login'));

app.listen(PORT, function() {
    console.log('Server has started on port:', PORT);
});
