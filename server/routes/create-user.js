var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var insertQuery = 'INSERT INTO users(name, coins) VALUES (?, ?)';

router.post('/createuser', function(req, res) {
    
    connection.query(insertQuery, [req.body.username, 1000], function(err, result) {
        if (err) { throw err; }
        console.log(result);
    });
	req.session.username = req.body.username;
    connection.end();
	res.end();
});

module.exports = router;
