function DashboardController($scope, $state, dashboardFactory) {
    var dc = this;

    dc.playerStats = {};
    dc.itemForAuction = {};
    dc.auctionStarted = false;

    dashboardFactory.getData(dashboardFactory.getName()).then(function (response) {
        dc.playerStats = response.data;
    });

    var unbindLogout = $scope.$on('logout', function () {
        dashboardFactory.logout();
        $state.go('login');
    });

    var unbindStart = $scope.$on('startAuction', function (evt, data) {
        dc.auctionStarted = true;
        dc.itemForAuction = data;
        $scope.$broadcast('roll it');
    });

    var unbindClose = $scope.$on('auction closed', function(evt, data) {
        dashboardFactory.processBid(data);
    });

    // Clear events
    $scope.$on('$destroy', function() {
        unbindLogout();
        unbindStart();
    });
}

module.exports = DashboardController;
