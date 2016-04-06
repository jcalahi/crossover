var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var connection = require('../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to DB...');
    connection.query('CREATE TABLE IF NOT EXISTS Users(ID int NOT NULL AUTO_INCREMENT, Name varchar(25) NOT NULL, Coins int NOT NULL, PRIMARY KEY (ID))');
});

router.use(function(req, res, next) {
	//res.redirect(express.static(path.join(__dirname + '/public')));
	if (!req.session.username) {
		req.session.username = req.body.username;
	}
	next();
});

router.get('/session', function(req, res) {
	req.session.username ? res.json({ hasSession: true }) : res.json({ hasSession: false });
});

module.exports = router;

