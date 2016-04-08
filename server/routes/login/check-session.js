var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Verify user has logged in
router.use('/session', function(req, res, next) {

	if (!req.session.username) {
		req.session.username = req.body.username;
	}

    next();
});

router.get('/session', function(req, res) {
    res.json({ username: req.session.username });
});

module.exports = router;
