var router = require('express').Router();

router.get('/dashboard', function(req, res) {
    req.session.destroy();
    res.send('logged out');
});

module.exports = router;
