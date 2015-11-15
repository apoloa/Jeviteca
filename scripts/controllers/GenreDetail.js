// Controller of the Details
angular.module('jeviteca')
    .controller('GenreDetailCtrl', function ($scope, $uibModalInstance, item, GenresBackend, Wikipedia) {

        $scope.item = item;

        $scope.loveItem = GenresBackend.getLoveGenre(item.id);

        $scope.iconLove = GenresBackend.getLoveGenre(item.id) ? "fa fa-heart" : "fa fa-heart-o";

        $scope.love = function () {
            if ($scope.loveItem) {
                $scope.iconLove = "fa fa-heart-o";
                $scope.loveItem = false;
                GenresBackend.removeLoveGenre(item.id);
            } else {
                $scope.iconLove = "fa fa-heart";
                $scope.loveItem = true;
                GenresBackend.setLoveGenre(item.id);
            }
        };

        $scope.wikipedia = function () {
            $uibModalInstance.close(Wikipedia(item.name));
        };

        $scope.ok = function () {
            $uibModalInstance.close();
        };


    });