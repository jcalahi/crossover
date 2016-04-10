function InventoryController($scope) {
    var ic = this;

    // holds bidding values
    ic.item = {};
    ic.bid = {};

    ic.auctionInProgress = false;
    ic.isSelected = false;
    /**
     * @desc function that displays a modal to perform auction/bidding
     * @param {String} name - selected item's name
     * @param {Integer} qty - selected item's quantity
     */
    ic.toggleModal = function(name, qty) {
        ic.item.name = name;
        ic.item.qty = qty;
        ic.isSelected = !ic.isSelected;
        // reset input fields
        ic.bid = {};
    };
    /**
     * @desc function starts auction/bidding process
     * @param {Object} bid - contains item in auction, quantity and bid value
     */
    ic.startAuction = function(bid) {
        bid.itemName = ic.item.name;
        $scope.$emit('startAuction', bid);
        // close modal
        ic.isSelected = false;
    };

}

module.exports = InventoryController;
