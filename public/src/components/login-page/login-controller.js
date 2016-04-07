function LoginController($state, loginFactory, sessionFactory) {
    var lc = this;

    lc.userName = '';
    lc.inValid = false;

    lc.init = function() {
        sessionFactory.get().then(function(response) {
            if (response.data.username) {
                loginFactory.getDashboard(response.data.username);
                $state.go('dashboard');
            }
        });
    };

    lc.loginBtn = function(username) {
        if (username === undefined || username.length <= 3) {
            lc.inValid = true;
        } else {
            lc.inValid = false;
            sessionFactory.create(username);
            loginFactory.getDashboard(username);
            $state.go('dashboard');
        }
    };

    lc.init();
}

module.exports = LoginController;
