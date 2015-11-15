/*
 Controller of the album detail with all information of the Album with modal container.
 */
angular.module('jeviteca')
    .controller('AlbumDetailCtrl', function ($scope, $uibModalInstance, item, AlbumsBackend, Wikipedia, Youtube) {

        $scope.item = item;

        $scope.loveItem = AlbumsBackend.getLoveAlbum(item.id);

        $scope.iconLove = AlbumsBackend.getLoveAlbum(item.id) ? "fa fa-heart" : "fa fa-heart-o";

        $scope.love = function () {
            if ($scope.loveItem) {
                $scope.iconLove = "fa fa-heart-o";
                $scope.loveItem = false;
                AlbumsBackend.removeLoveAlbum(item.id);
            } else {
                $scope.iconLove = "fa fa-heart";
                $scope.loveItem = true;
                AlbumsBackend.setLoveAlbum(item.id);
            }
        };

        $scope.wikipedia = function () {
            if(item.band){
                $uibModalInstance.close(Wikipedia(item.band.name));
            }else{
                $uibModalInstance.close(Wikipedia(item.title));
            }

        };

        $scope.youtube = function (song) {
            $uibModalInstance.close(Youtube(item.band.name, song));
        };

        $scope.ok = function () {
            $uibModalInstance.close();
        };


    });