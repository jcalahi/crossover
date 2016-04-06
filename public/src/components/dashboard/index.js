require('angular').module('crossover')
	.controller('DashboardController', require('./dashboard-controller.js'))
    .controller('PlayerController', require('./player-widget/player-controller.js'));

require('./player-widget');
require('./inventory-widget');
require('./auction-widget');
