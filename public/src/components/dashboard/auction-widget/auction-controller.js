function AuctionController($scope, $stateParams, $state, $interval) {
    var ac = this;

    ac.timeLeft = 90;

    var promise = null;
    var hasBidding = false;

    var unbind = $scope.$on('roll it', function() {
        promise = $interval(function() {
            ac.timeLeft -= 1;

            if (ac.timeLeft === 0) {
                if (hasBidding) {
                    $scope.$emit('auction closed', ac.item);
                }
                ac.timeLeft = 90;
                ac.auctionStarted = false;
                stop();
            }
        }, 1000);
    });

    // Clear events
    $scope.$on('$destoy', function() {
        stop();
        unbind();
    });
    /**
     * @desc function that places new bid value in the ongoing item for auction
     * @param {Object} item - contains item name, minimum bid value, and quantity
     */
    ac.placeBid = function(item) {
        hasBidding = true;
        if (ac.placeBidValue === null || ac.placeBidValue === undefined || ac.placeBidValue === ac.item.value || ac.timeLeft === 0) {
            return;
        }
        if (ac.timeLeft <= 10 && ac.timeLeft !== 0) {
            ac.timeLeft = 10;
        }
        ac.item.value = ac.placeBidValue;
        item.sellerName = ac.sellerName;
    };

    // Cancel $interval
    function stop() {
        $interval.cancel(promise);
    }
}

module.exports = AuctionController;
