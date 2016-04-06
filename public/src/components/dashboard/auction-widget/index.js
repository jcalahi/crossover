require('angular').module('crossover')
    .controller('AuctionController', require('./auction-controller.js'))
    .directive('auctionWidget', require('./auction-directive.js'));
