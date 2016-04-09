function DashboardController($scope, $state, dashboardFactory) {
    var dc = this;

    dc.playerStats = {};

    dashboardFactory.getData(dashboardFactory.getName()).then(function(response) {
        dc.playerStats = response.data;
    });

    $scope.$on('logout', function() {
        dashboardFactory.logout();
        $state.go('login');
    });
}

module.exports = DashboardController;
