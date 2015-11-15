angular.module("jeviteca").directive("albumItem", function (AlbumsBackend) {

    return {
        restrict: "AE",
        templateUrl: "views/AlbumRow.html",

        scope: {
            album: "=",
            showModal: "&"
        },
        
        link: function (scope) {
            scope.iconLove = AlbumsBackend.getLoveAlbum(scope.album.id) ? "fa fa-heart" : "fa fa-heart-o";
        }

    }
});