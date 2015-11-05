// Controller with the collection of generes

angular.module("jeviteca").controller("GenresCtrl", function($scope, $http){
    $http.get("model/genres.json").then(

        function(response){
            $scope.genres = response.data;
        },

        function(error){
            console.log(error);
        }

    );
});
