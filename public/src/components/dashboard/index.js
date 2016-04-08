require('angular').module('crossover')
	.controller('DashboardController', require('./dashboard-controller.js'))
    .controller('PlayerController', require('./player-widget/player-controller.js'))
    .factory('dashboardFactory', require('./dashboard-factory.js'));

require('./player-widget');
require('./inventory-widget');
require('./auction-widget');
