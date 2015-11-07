// Application Definition
angular.module("jeviteca", ["ngRoute"]);


angular.module("jeviteca").config(function(AlbumsBackendProvider, Properties){
    AlbumsBackendProvider.establishUrlAlbums(Properties.albumsUrl);
});


angular.module("jeviteca").config(function($routeProvider){
    $routeProvider.when("/albums",{
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsBackend", function(AlbumsBackend){
                return AlbumsBackend.getAllAlbums();
            }]
        }
    });

    $routeProvider.when("/bands",{
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html"
    });

    $routeProvider.when("/genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html"
    });

    $routeProvider.otherwise({
        redirectTo: "/albums"
    });
});