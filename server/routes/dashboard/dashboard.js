var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');
var query = require('../../database/query-strings');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/dashboard/:username', function(req, res) {

    var playerData = {
        name: '',
        coins: '',
        inventoryItems: []
    };

    connection.query(query.selectUser, req.params.username, function(err, rows) {
        if (err) throw err;

        playerData.name = rows[0].name;
        playerData.coins = rows[0].coins;
        playerData.inventoryItems.push({ name: 'Breads', quantity: rows[0].breads });
        playerData.inventoryItems.push({ name: 'Carrots', quantity: rows[0].carrots });
        playerData.inventoryItems.push({ name: 'Diamonds', quantity: rows[0].diamonds });

        res.json(playerData);
    });

});

module.exports = router;
