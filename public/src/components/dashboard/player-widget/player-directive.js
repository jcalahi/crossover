function playerWidget() {

    var self = {};

    self.link = function(scope, elem, attrs) {

    };

    return {
        link: self.link,
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
