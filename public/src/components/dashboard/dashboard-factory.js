function dashboardFactory($http, dashboardAPI) {

    return {
        getData: getData,
        getName: getName,
        setName: setName,
        logout: logout,
        processBid: processBid
    };
    /**
     * @desc GET call to retrieve data from database
     * @param {String} username - Player name
     */
    function getData(username) {
        var request = {
                method: 'GET',
                url: dashboardAPI + '/' + username
            };

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

        return $http(request).then(function(response) {
            return response;
        });
    }
    /**
     * @desc PUT call to update player's data in database.
     * @param {Object} item - contains transaction data
     */
    function processBid(item) {
        var req = {
            method: 'PUT',
            url: dashboardAPI + '/' + item.sellerName,
            data: item
        };

        return $http(req).then(function(response) {
            return response;
        });
    }

}

module.exports = dashboardFactory;
