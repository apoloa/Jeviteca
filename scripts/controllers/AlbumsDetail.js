angular.module('jeviteca').controller('AlbumDetailCtrl', function ($scope,$uibModalInstance, item) {

    $scope.item = item;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

});