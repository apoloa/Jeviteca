// Controler of Bands

angular.module("jeviteca").controller("BandsCtrl", function($scope, $http){
    $http.get("model/bands.json").then(

        function(response){
            $scope.bands = response.data;
        },

        function(error){
            console.log(error);
        }

    );
});
