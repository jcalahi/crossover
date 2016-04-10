/**
 * Router middleware that creates new player
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');
var query = require('../../database/query-strings');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to DB...');
    connection.query(query.createTable);
});

router.use('/createuser', function(req, res, next) {

    connection.query(query.searchUser, req.body.username, function(err, result) {

        if (err) throw err;

        if (result.length) {
            console.log('user exists');
        } else {

            connection.query(query.insertUser, [req.body.username, 1000, 30, 18, 1], function(err) {
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
