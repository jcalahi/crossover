function dashboardFactory($http, dashboardAPI) {

    var name = null;

    return {
        getData: getData,
        getName: getName,
        setName: setName
    };

    function getName() {
        return this.name;
    }

    function setName(name) {
        this.name = name;
    }

    function getData(username) {
        var request = {
            method: 'GET',
            url: dashboardAPI + '/' + username
        };

        return $http(request).then(function(response) {
            return response;
        });

    }

}

module.exports = dashboardFactory;
