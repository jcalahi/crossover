function LoginController($state, dashboardFactory, sessionFactory) {
    var lc = this;

    lc.userName = '';
    lc.inValid = false;

    lc.init = function() {
        sessionFactory.get().then(function(response) {
            if (response.data.username) {
                $state.go('dashboard');
                dashboardFactory.setName(response.data.username);
            }
        });
    };

    lc.loginBtn = function(username) {
        if (username === undefined || username.length <= 3) {
            lc.inValid = true;
        } else {
            lc.inValid = false;
            sessionFactory.create(username);
            dashboardFactory.setName(username);
            $state.go('dashboard');
        }
    };

    lc.init();
}

module.exports = LoginController;
