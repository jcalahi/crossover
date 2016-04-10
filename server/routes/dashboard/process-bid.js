/**
 * Router middleware that updates player data in MySQL database.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.put('/dashboard/:username', function(req, res) {

    switch (req.body.itemName) {
        case 'Breads':
            connection.query('UPDATE users SET breads = breads - ? WHERE name=?', [req.body.qty, req.params.username], function(err, result) {
                if (err) throw err;
                connection.query('UPDATE users SET coins = coins - ? WHERE name=?', [req.body.value, req.params.username], function(err, result) {
                    if (err) throw err;
                });
            });
            res.status(200).end();
            break;

        case 'Carrots':
            connection.query('UPDATE users SET carrots = carrots - ? WHERE name=?', [req.body.qty, req.params.username], function(err, result) {
                if (err) throw err;
                connection.query('UPDATE users SET coins = coins - ? WHERE name=?', [req.body.value, req.params.username], function(err, result) {
                    if (err) throw err;
                });
            });
            res.status(200).end();
            break;
        case 'Diamonds':
            connection.query('UPDATE users SET diamonds = diamonds - ? WHERE name=?', [req.body.qty, req.params.username], function(err, result) {
                if (err) throw err;
                connection.query('UPDATE users SET coins = coins - ? WHERE name=?', [req.body.value, req.params.username], function(err, result) {
                    if (err) throw err;
                });
            });
            res.status(200).end();
            break;
        default:
            break;
    }
});

module.exports = router;
