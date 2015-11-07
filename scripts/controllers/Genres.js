// Controller with the collection of generes

angular.module("jeviteca").controller("GenresCtrl", function($scope, Genres) {

    // Saved albums in context
    $scope.genres = Genres.data;
});
