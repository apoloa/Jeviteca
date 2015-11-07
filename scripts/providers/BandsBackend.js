angular.module("jeviteca").provider("BandsBackend", function() {

    var urlBands = "";

    return {
        setUrlBands: function(value) {
            urlBands = value;
        },

        $get: ["$http", function($http) {

            return {

                // Get all albums
                getAllBands: function() {
                    return $http.get(urlBands, {
                        cache: true
                    });
                }
            };
        }]
    };

});