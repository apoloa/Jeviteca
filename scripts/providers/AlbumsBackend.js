angular.module("jeviteca").provider("AlbumsBackend", function () {

    var urlAlbums = "";

    const localStorageId = "Albums";

    return {
        setUrlAlbums: function (value) {
            urlAlbums = value;
        },

        $get: ["$http", "Love", function ($http, Love) {

            return {

                // Get all albums
                getAllAlbums: function () {
                    return $http.get(urlAlbums, {
                        cache: true
                    });
                },

                getLoveAlbum: function (id) {
                    return Love.getLove(localStorageId,id);
                },

                setLoveAlbum: function (id) {
                    Love.setLove(localStorageId, id);
                },

                removeLoveAlbum: function (id) {
                    Love.removeLove(localStorageId, id);
                }

            };
        }]
    };

});