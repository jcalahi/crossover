require('angular').module('crossover')
    .controller('InventoryController', require('./inventory-controller.js'))
    .directive('inventoryWidget', require('./inventory-directive.js'))
    .directive('modal', require('./modal-directive.js'));
