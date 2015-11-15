/*
 Controller of the band detail with all information of the band with modal container.
 */
angular.module('jeviteca')
    .controller('BandDetailCtrl', function ($scope, $uibModalInstance, item, BandsBackend, Wikipedia, Youtube) {

        $scope.item = item;

        $scope.loveItem = BandsBackend.getLoveBand(item.id);

        $scope.iconLove = BandsBackend.getLoveBand(item.id) ? "fa fa-heart" : "fa fa-heart-o";

        $scope.love = function () {
            if ($scope.loveItem) {
                $scope.iconLove = "fa fa-heart-o";
                $scope.loveItem = false;
                BandsBackend.removeLoveBand(item.id);
            } else {
                $scope.iconLove = "fa fa-heart";
                $scope.loveItem = true;
                BandsBackend.setLoveBand(item.id);
            }
        };

        $scope.wikipedia = function () {
            $uibModalInstance.close(Wikipedia(item.band.name));
        };

        $scope.youtube = function (song) {
            $uibModalInstance.close(Youtube(item.band.name, song));
        };

        $scope.ok = function () {
            $uibModalInstance.close();
        };


    });