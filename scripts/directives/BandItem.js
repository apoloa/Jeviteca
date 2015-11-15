angular.module("jeviteca").directive("bandItem", function(BandsBackend){

    return {
        restrict: "AE",
        templateUrl: "views/BandRow.html",

        scope: {
            band: "="
        },

        link: function (scope) {
            scope.iconLove = BandsBackend.getLoveBand(scope.band.id) ? "fa fa-heart" : "fa fa-heart-o";
        }
    }

});