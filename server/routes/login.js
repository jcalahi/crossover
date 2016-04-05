var router = require('express').Router();

router.use(function(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.status = 401;
        next();
    }
});

router.get('/getsession', function(req, res) {
    if (res.status === 401) {
        res.json({ message: 'Session expired' });
    }
});

module.exports = router;
