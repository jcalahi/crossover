function DashboardController($scope, $state, $stateParams, dashboardFactory) {
    var dc = this;

    dc.playerStats = {};
    dc.itemForAuction = {};
    dc.auctionStarted = false;

    // Called on page load to retrieve player data
    dashboardFactory.getData(dashboardFactory.getName()).then(function(response) {
        dc.playerStats = response.data;
    });

    var unbindLogout = $scope.$on('logout', function() {
        dashboardFactory.logout().then(function(response) {
            if (response.status === 200) {
                $state.go('login');
            }
        });
    });

    var unbindStart = $scope.$on('startAuction', function(evt, data) {
        dc.auctionStarted = true;
        dc.itemForAuction = data;
        $scope.$broadcast('roll it');
    });

    var unbindClose = $scope.$on('auction closed', function(evt, data) {
        updateData(dc.playerStats, data);

        dashboardFactory.processBid(data).then(function(response) {
            if (response.data === 200) {
                dashboardFactory.getData(dashboardFactory.getName()).then(function(res) {
                    dc.playerStats = res.data;
                });
            }

        });
    });

    // Clear events
    $scope.$on('$destroy', function() {
        unbindLogout();
        unbindStart();
        unbindClose();
    });
    /**
     * @desc function that updates player dashboard in real-time
     * @param {Object} playerData - logged in player's data
     * @param {Object} newData - contains player's recent transaction
     */
    function updateData(playerData, newData) {
        playerData.coins = playerData.coins - newData.value;

        angular.forEach(playerData.inventoryItems, function(item) {
            if (item.name === newData.itemName) {
                item.quantity = item.quantity - newData.qty;
            }
        });
    }
}

module.exports = DashboardController;
