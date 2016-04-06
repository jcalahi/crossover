require('angular').module('crossover')
    .controller('InventoryController', require('./inventory-controller.js'))
    .directive('inventoryWidget', require('./inventory-directive.js'));
