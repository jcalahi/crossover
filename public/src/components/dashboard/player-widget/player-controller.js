function PlayerController($scope) {
    var pc = this;

    pc.logoutBtn = function() {
        $scope.$emit('logout');
    };
}

module.exports = PlayerController;
