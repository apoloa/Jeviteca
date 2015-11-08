// Controller with the collection of albums

angular.module("jeviteca").controller("AlbumsCtrl", function($scope,$uibModal, Albums) {

    // Saved albums in context
    $scope.albums = Albums.data;
    $scope.orderBy = "";
    $scope.reverse = false;
    $scope.classReverse = 'fa fa-chevron-up';

    $scope.order = function(predicate) {
        $scope.reverse = ($scope.orderBy === predicate) ? !$scope.reverse : false;
        $scope.orderBy = predicate;
        if(reverse){
            $scope.classReverse = 'fa fa-chevron-down';
        }else{
            $scope.classReverse = 'fa fa-chevron-up';
        }

    }
    $scope.openModal = function(element){
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/AlbumsDetail.html',
            controller: 'AlbumDetailCtrl',
            //size: "lg",
            resolve: {
                item: function () {
                    return element;
                }
            }
        });
        modalInstance.result.then(function () {

        }, function () {

        });
    }

});