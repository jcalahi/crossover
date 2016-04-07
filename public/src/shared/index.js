require('angular').module('crossover')
    .value('sessionAPI', '/myapplication/session')
    .value('createUserAPI', '/myapplication/createuser')
    .value('dashboardAPI', '/myapplication/dashboard')
    .factory('sessionFactory', require('./session-factory.js'));
