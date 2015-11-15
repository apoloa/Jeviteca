angular.module("jeviteca").directive("genreItem", function(GenresBackend){
    return {
        restrict: "AE",
        templateUrl: "views/GenreRow.html",

        scope: {
            genre: "="
        },

        link: function (scope) {
            scope.iconLove = GenresBackend.getLoveGenre(scope.genre.id) ? "fa fa-heart" : "fa fa-heart-o";
        }
    }
});