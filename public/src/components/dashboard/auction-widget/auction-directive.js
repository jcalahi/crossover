function auctionWidget() {
    return {
        restrict: 'E',
        controller: 'AuctionController',
        controllerAs: 'auctionCtrl',
        bindToController: true,
        scope: {
            sellerName: '=',
            auctionStarted: '=',
            item: '='
        },
        templateUrl: 'src/components/dashboard/auction-widget/auction.html'
    };
}

module.exports = auctionWidget;
