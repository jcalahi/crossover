function playerWidget() {

    return {
        restrict: 'E',
        controller: 'PlayerController',
        controllerAs: 'playerCtrl',
        bindToController: true,
        scope: {
            userData: '='
        },
        templateUrl: 'src/components/dashboard/player-widget/player.html'
    };
}

module.exports = playerWidget;
