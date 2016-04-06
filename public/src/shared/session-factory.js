function sessionFactory($http, sessionAPI, createUserAPI) {

    return {
        create: create,
        get: get
    };

    function create(username) {
        var requestObj = {
            method: 'POST',
            url: createUserAPI,
            data: { username: username }
        };


        return $http(requestObj);
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
