var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var createTableQuery = 'CREATE TABLE IF NOT EXISTS Users(ID int NOT NULL AUTO_INCREMENT, Name varchar(25) NOT NULL, Coins int NOT NULL, PRIMARY KEY (ID))';

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to DB...');
    connection.query(createTableQuery);
});

// Verify user has logged in
router.use('/session', function(req, res, next) {

	if (!req.session.username) {
		req.session.username = req.body.username;
	}
    next();
});

router.get('/session', function(req, res) {
	//req.session.username ? res.json({ hasSession: true }) : res.json({ hasSession: false }); // jshint ignore:line
    res.json({ username: req.session.username });
});

module.exports = router;
