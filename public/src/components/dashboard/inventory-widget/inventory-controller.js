function InventoryController($scope) {
    var ic = this;

    // holds bidding values
    ic.item = {};
    ic.bid = {};

    ic.auctionInProgress = false;
    ic.isSelected = false;

    ic.toggleModal = function(name, qty) {
        ic.item.name = name;
        ic.item.qty = qty;
        ic.isSelected = !ic.isSelected;
        // reset input fields
        ic.bid = {};
    };

    ic.startAuction = function(bid) {
        bid.itemName = ic.item.name;
        $scope.$emit('startAuction', bid);
        // close modal
        ic.isSelected = false;
    };

}

module.exports = InventoryController;
