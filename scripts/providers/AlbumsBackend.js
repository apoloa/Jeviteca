angular.module("jeviteca").provider("AlbumsBackend", function() {

    var urlAlbums = "";

    return {
        setUrlAlbums: function(value) {
            urlAlbums = value;
        },

        $get: ["$http", function($http) {

            return {

                // Get all albums
                getAllAlbums: function() {
                    return $http.get(urlAlbums, {
                        cache: true
                    });
                }
            };
        }]
    };

});