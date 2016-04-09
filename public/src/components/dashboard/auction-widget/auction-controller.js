function AuctionController($scope, $interval) {
    var ac = this;

    ac.timeLeft = 5;

    var promise = null;

    var unbind = $scope.$on('roll it', function() {

        promise = $interval(function() {
            ac.timeLeft -= 1;
            if (ac.timeLeft === 0) {
                stop();
                $scope.$emit('auction closed', ac.item);
            }
        }, 1000);

    });

    // Clear events
    $scope.$on('$destoy', function() {
        stop();
        unbind();
    });

    ac.placeBid = function(item) {

        if (ac.placeBidValue === null || ac.placeBidValue === undefined || ac.timeLeft === 0) {
            return;
        }

        if (ac.timeLeft <= 10 && ac.timeLeft !== 0) {
            ac.timeLeft = 10;
        }

        ac.item.value = ac.placeBidValue;
        console.log(item);
    };

    function stop() {
        $interval.cancel(promise);
    }
}

module.exports = AuctionController;
