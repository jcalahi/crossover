var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');
var query = require('../../database/query-strings');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use('/dashboard/:username', function(req, res, next) {

    connection.query(query.selectUser, req.params.username, function(err, result) {

        if (err) throw err;
        res.playerData = result;
    });

    next();
});

router.get('/dashboard/:username', function(req, res) {
    console.log(res.playerData);
    res.end();
});

module.exports = router;
