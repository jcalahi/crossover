// MySQL database configuration
var connection = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    database: 'crossover'
});

module.exports = connection;
