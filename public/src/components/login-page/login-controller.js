function LoginController($state, dashboardFactory, sessionFactory) {
    var lc = this;

    lc.userName = '';
    lc.inValid = false;

    // Called on page load
    lc.init = function() {
        sessionFactory.get().then(function(response) {
            if (response.data.username) {
                $state.go('dashboard');
                dashboardFactory.setName(response.data.username);
            }
        });
    };
    /**
     * @desc function that catches the username to create a new player
     * @param {String} username - Player name
     */
    lc.loginBtn = function(username) {
        if (username === undefined || username.length <= 3) {
            lc.inValid = true;
        } else {
            lc.inValid = false;
            sessionFactory.create(username);
            dashboardFactory.setName(username);
            $state.go('dashboard', { username: username });
        }
    };

    lc.init();
}

module.exports = LoginController;
