function loginFactory($http, dashboardAPI) {
    return {
        getDashboard: getDashboard
    };

    function getDashboard(name) {
        var requestObj = {
            method: 'GET',
            url: dashboardAPI + '/' + name
        };

        return $http(requestObj).then(function(response) {
            return response;
        });
    }
}

module.exports = loginFactory;
