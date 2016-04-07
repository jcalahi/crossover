var express = require('express');
var router = express.Router();
var connection = require('../../database/dbconfig');

router.get('/dashboard', function(req, res) {
    res.end("dashboard page");
});

module.exports = router;
