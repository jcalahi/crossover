/**
 * Router middleware that logs off and deletes player session/cookies.
 */
var router = require('express').Router();

router.get('/dashboard', function(req, res) {
    req.session.destroy(function() {
        res.clearCookie('uid', { path: '/' });
        res.status(200).end();
    });
});

module.exports = router;
