var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/createuser', function(req, res) {
	req.session.username = req.body.username;
	res.end();
});

module.exports = router;
