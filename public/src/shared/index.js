require('angular').module('crossover')
    .value('sessionAPI', '/myapplication/session')
    .value('createUserAPI', '/myapplication/createuser')
    .factory('sessionFactory', require('./session-factory.js'));
