function dashboardFactory($http, dashboardAPI) {

    var name = null;

    return {
        getData: getData,
        getName: getName,
        setName: setName,
        logout: logout
    };

    function getData(username) {
        var request = {
                method: 'GET',
                url: dashboardAPI + '/' + username
            },
            playerStats = {};

        return $http(request).then(function(response) {
            return response;
        });

    }

    function getName() {
        return this.name;
    }

    function setName(name) {
        this.name = name;
    }

    function logout() {
        var request = {
            method: 'GET',
            url: dashboardAPI
        };

        $http(request);
    };

}

module.exports = dashboardFactory;
