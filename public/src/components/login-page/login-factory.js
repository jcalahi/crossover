function loginFactory($http, dashboardAPI) {
    return {
        getDashboard: getDashboard
    };

    function getDashboard(username) {
        var requestObj = {
            method: 'GET',
            url: dashboardAPI + '/' + username
        };

        return $http(requestObj).then(function(response) {
            return response;
        });
    }
}

module.exports = loginFactory;
