function SessionController($state, sessionFactory) {
    var sc = this;

    sc.userName = '';

    sc.init = function() {
        sessionFactory.get().then(function(response) {
            console.log(response.data);
            if (response.data.hasSession) {
                $state.go('dashboard');
            }
        });
    };

    sc.loginBtn = function(username) {
    	sessionFactory.create(username);
        $state.go('dashboard');
    };

    sc.init();
}

module.exports = SessionController;
