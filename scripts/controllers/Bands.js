// Controler of Bands

angular.module("jeviteca").controller("BandsCtrl", function($scope, Bands) {

    // Saved albums in context
    $scope.bands = Bands.data;
});
