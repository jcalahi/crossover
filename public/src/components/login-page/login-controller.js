function LoginController($state, sessionFactory) {
    var lc = this;

    lc.userName = '';

    lc.init = function() {
        sessionFactory.get().then(function(response) {
            if (response.data.hasSession) {
                $state.go('dashboard');
            }
        });
    };

    lc.loginBtn = function(username) {
    	sessionFactory.create(username);
        $state.go('dashboard');
    };

    lc.init();
}

module.exports = LoginController;
