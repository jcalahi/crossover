require('angular').module('crossover')
    .controller('PlayerController', require('./player-controller.js'))
    .directive('playerWidget', require('./player-directive.js'));
