var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var insertQuery = 'INSERT INTO users(name, coins) VALUES (?, ?)';
var searchQuery = 'SELECT name FROM users WHERE name=?';

router.use('/createuser', function(req, res, next) {

    connection.query(searchQuery, req.body.username, function(err, result) {

        if (err) throw err;

        if (result.length) {
            console.log('user exists');
        } else {

            connection.query(insertQuery, [req.body.username, 1000], function(err, result) {
                if (err) throw err;
                console.log(req.body.username, 'added to DB');
            });

            console.log('user not found');
        }

    });

    next();
});

router.post('/createuser', function(req, res) {
    req.session.username = req.body.username;
    res.send('user created');
});

module.exports = router;
