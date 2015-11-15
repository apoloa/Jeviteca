angular.module("jeviteca").provider("GenresBackend", function () {

    var urlGenres = "";
    var localStorageId = "Genres";

    return {
        setUrlGenres: function (value) {
            urlGenres = value;
        },

        $get: ["$http", "Love", function ($http, Love) {

            return {

                // Get all albums
                getAllGenres: function () {
                    return $http.get(urlGenres, {
                        cache: true
                    });
                },

                getLoveGenre: function (id) {
                    return Love.getLove(localStorageId, id);
                },

                setLoveGenre: function (id) {
                    Love.setLove(localStorageId, id);
                },

                removeLoveGenre: function (id) {
                    Love.removeLove(localStorageId, id);
                }
            };
        }]
    };

});