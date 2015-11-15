angular.module("jeviteca").provider("BandsBackend", function() {

    var urlBands = "";
    var localStorageId = "Bands";

    return {
        setUrlBands: function(value) {
            urlBands = value;
        },

        $get: ["$http","Love", function($http, Love) {

            return {

                // Get all albums
                getAllBands: function() {
                    return $http.get(urlBands, {
                        cache: true
                    });
                },

                getLoveBand: function (id) {
                    return Love.getLove(localStorageId,id);
                },

                setLoveBand: function (id) {
                    Love.setLove(localStorageId, id);
                },

                removeLoveBand: function (id) {
                    Love.removeLove(localStorageId, id);
                }

            };
        }]
    };

});