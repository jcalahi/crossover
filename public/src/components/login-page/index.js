require('angular').module('crossover')
    .controller('LoginController', require('./login-controller.js'))
    .factory('loginFactory', require('./login-factory.js'));
