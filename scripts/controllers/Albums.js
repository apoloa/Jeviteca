// Controller with the collection of albums

angular.module("jeviteca").controller("AlbumsCtrl", function ($scope, $window, $uibModal, Albums) {

    // Saved albums in context
    $scope.albums = Albums.data;



});