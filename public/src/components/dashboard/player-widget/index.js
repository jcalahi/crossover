require('angular').module('crossover')
    .controller('PlayerController', require('./player-controller.js'))
    .factory('playerFactory', require('./player-factory.js'))
    .directive('playerWidget', require('./player-directive.js'));
