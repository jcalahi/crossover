function LoginController(sessionFactory) {
    var lc = this;

    lc.userName = '';

    lc.init = function() {
        sessionFactory.get();
    };

    lc.loginBtn = function(name) {
    };

    lc.init();
}

module.exports = LoginController;
