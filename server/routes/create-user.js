var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var insertQuery = 'INSERT INTO users(name, coins) VALUES (?, ?)';
var searchQuery = 'SELECT name FROM users WHERE name=?';

router.use(function(req, res, next) {
    connection.query(searchQuery, req.body.username, function(err, result) {
        if (result.length > 0) {
            console.log('exists');
        } else {
            console.log('not found');
        }
    });
    next();
});

router.post('/createuser', function(req, res) {
    
    /*connection.query(insertQuery, [req.body.username, 1000], function(err, result) {
        if (err) { throw err; }
    });*/
	req.session.username = req.body.username;
    connection.end();
	res.end();
});

module.exports = router;
