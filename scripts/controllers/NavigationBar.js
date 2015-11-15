angular.module("jeviteca").controller("NavigationBarCtrl", function($scope, $route) {


    $scope.routeAlbums = function() {

        return $route.current && $route.current.$$route.originalPath === "/albums";
    };

    $scope.routeBands = function() {

        return $route.current && $route.current.$$route.originalPath === "/bands";
    };

    $scope.routeGenres = function() {

        return $route.current && $route.current.$$route.originalPath === "/genres";
    };
});