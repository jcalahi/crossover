function InventoryController() {
    var ic = this;

    ic.isSelected = false;
    ic.item = {};

    ic.toggleModal = function(name, qty) {
        ic.item.name = name;
        ic.item.qty = qty;
        ic.isSelected = !ic.isSelected;
    };

}

module.exports = InventoryController;
