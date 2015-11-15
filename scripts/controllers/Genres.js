// Controller with the collection of generes

angular.module("jeviteca").controller("GenresCtrl", function($scope, $uibModal, Genres, $route) {

    // Saved albums in context
    $scope.genres = Genres.data;

    $scope.orderBy = "";
    $scope.reverse = false;
    $scope.classReverse = 'fa fa-chevron-up';

    $scope.order = function (predicate) {
        $scope.reverse = ($scope.orderBy === predicate) ? !$scope.reverse : false;
        $scope.orderBy = predicate;
        if ($scope.reverse) {
            $scope.classReverse = 'fa fa-chevron-down';
        } else {
            $scope.classReverse = 'fa fa-chevron-up';
        }
    };

    $scope.openModal = function (element) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/GenreDetail.html',
            controller: 'GenreDetailCtrl',
            //size: "lg",
            resolve: {
                item: function () {
                    return element;
                }
            }
        });
        modalInstance.result.then(function () {
            $route.reload();
        }, function () {
            $route.reload();
        });
    }
});
