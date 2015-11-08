// Application Definition
angular.module("jeviteca", ["ngRoute", "angular-loading-bar","ngAnimate", "ui.bootstrap"]);


angular.module("jeviteca").config(function(AlbumsBackendProvider, GenresBackendProvider,
                                           BandsBackendProvider, Properties) {
    AlbumsBackendProvider.setUrlAlbums(Properties.albumsUrl);
    GenresBackendProvider.setUrlGenres(Properties.genresUrl);
    BandsBackendProvider.setUrlBands(Properties.bandsUrl);
});


angular.module("jeviteca").config(function($routeProvider) {

    $routeProvider.when("/albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsBackend", function(AlbumsBackend) {
                return AlbumsBackend.getAllAlbums();
            }]
        }
    });

    $routeProvider.when("/bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsBackend", function(BandsBackend) {
                return BandsBackend.getAllBands();
            }]
        }
    });

    $routeProvider.when("/genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresBackend", function(GenresBackend) {
                return GenresBackend.getAllGenres();
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo: "/albums"
    });
});