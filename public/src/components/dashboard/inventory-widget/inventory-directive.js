function inventoryWidget() {

    return {
        restrict: 'E',
        controller: 'InventoryController',
        controllerAs: 'inventoryCtrl',
        bindToController: true,
        scope: {
            inventoryItems: '='
        },
        templateUrl: 'src/components/dashboard/inventory-widget/inventory.html'
    };

}

module.exports = inventoryWidget;
