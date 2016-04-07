var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var connection = require('../../database/dbconfig');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use('/dashboard:id', function(req, res, next) {

});

router.use('/dashboard')
