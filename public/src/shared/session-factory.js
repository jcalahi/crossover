function sessionFactory($http, sessionAPI) {

    return {
        create: create,
        get: get
    };

    function create() {
    }

    function get() {

        var requestObj = {
            method: 'GET',
            url: sessionAPI
        };

        return $http(requestObj).then(successCb, errorCb);
    }

    function successCb(response) {
        return response;
    }

    function errorCb(error) {
        return error;
    }
}

module.exports = sessionFactory;
