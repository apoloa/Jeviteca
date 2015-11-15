angular.module("jeviteca").directive("albumTable",function ($uibModal, $window, $route) {

    return {
        restrict: "E",
        templateUrl: "views/AlbumTable.html",

        scope: {
            albums: "="
        },

        link: function (scope) {
            scope.orderBy = "";
            scope.reverse = false;
            scope.classReverse = 'fa fa-chevron-up';

            scope.order = function (predicate) {
                scope.reverse = (scope.orderBy === predicate) ? !scope.reverse : false;
                scope.orderBy = predicate;
                if (scope.reverse) {
                    scope.classReverse = 'fa fa-chevron-down';
                } else {
                    scope.classReverse = 'fa fa-chevron-up';
                }
            };

            scope.openModal = function (element) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'views/AlbumDetail.html',
                    controller: 'AlbumDetailCtrl',
                    size: "lg",
                    resolve: {
                        item: function () {
                            return element;
                        }
                    }
                });
                modalInstance.result.then(function (data) {
                    if (data) {
                        $window.location.href = data;
                    }
                    $route.reload();
                }, function () {
                    $route.reload();
                });
            }
        }

    }
});