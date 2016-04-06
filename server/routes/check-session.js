var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(function(req, res, next) {
	//res.redirect(express.static(path.join(__dirname + '/public')));
	if (!req.session.username) {
		req.session.username = req.body.username;
	}
	next();
});

router.get('/session', function(req, res) {
	req.session.username ? res.json({ hasSession: true }) : res.json({ hasSession: false });
});

module.exports = router;
