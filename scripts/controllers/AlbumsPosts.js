// Controller with the collection of albums

angular.module("jeviteca").controller("AlbumsPostCtrl", function($scope, $http){
    $http.get("model/albums.json").then(

        function(response){
            $scope.albums = response.data;
        },

        function(error){
            console.log(error);
        }

    );
});