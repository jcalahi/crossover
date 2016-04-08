function DashboardController(dashboardFactory) {
    var dc = this;
    dc.userData = dashboardFactory.getName();

    dashboardFactory.getData(dashboardFactory.getName()).then(function(response) {
        console.log(response);
    });
}

module.exports = DashboardController;
