angular.module("jeviteca").provider("GenresBackend", function() {

    var urlGenres = "";

    return {
        setUrlGenres: function(value) {
            urlGenres = value;
        },

        $get: ["$http", function($http) {

            return {

                // Get all albums
                getAllGenres: function() {
                    return $http.get(urlGenres, {
                        cache: true
                    });
                }
            };
        }]
    };

});