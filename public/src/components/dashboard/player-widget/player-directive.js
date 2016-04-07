function playerWidget() {
    return {
        restrict: 'E',
        controller: 'PlayerController',
        controllerAs: 'playerCtrl',
        templateUrl: 'src/components/dashboard/player-widget/player.html'
    };
}

module.exports = playerWidget;
