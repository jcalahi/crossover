require('angular').module('crossover')
    .value('sessionAPI', '/myapplication/getsession')
    .factory('sessionFactory', require('./session-factory.js'));
