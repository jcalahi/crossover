var express = require('express');
var router = express.Router();
var connection = require('../../database/dbconfig');

router.get('/dashboard/:username', function(req, res) {
    console.log('dashboard called');
    res.json({ username: req.params.username });
});

module.exports = router;
