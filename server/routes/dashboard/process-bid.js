var router = require('express').Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');
var query = require('../../database/query-strings');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.put('/dashboard/:username', function(req, res) {
    connection.query('UPDATE users SET ? WHERE name=?', [{ Breads: Breads - req.body.qty }, req.params.username], function(err, result) {
        console.log(result);
        res.end();
    });
});

module.exports = router;
/*

UPDATE Customers
SET ContactName='Alfred Schmidt', City='Hamburg'
WHERE CustomerName='Alfreds Futterkiste';

connection.query('UPDATE users SET ? WHERE UserID = :UserID',
                     {UserID: userId, Name: name})*/

/*connection.query('UPDATE user SET ? WHERE ?', [{
    Name: name
}, {
    UserId: userId
}])*/
