myApp.controller('HomePageCtrl', ['$scope', '$location', '$http','$routeParams', '$cookies', '$sce', 'imageFileService', 'ConvertService',
   function($scope, $location, $http, $routeParams, $cookies, $sce, imageFileService, ConvertService){


    //Person
    $scope.image = {};
    $scope.imageSrc = {};

    //Workspace Items
      
    $scope.showHomeWorkSpace = false;


    $scope.setShowHomeWorkSpace = function(status){
           $scope.showHomeWorkSpace = status;
        }

    $scope.loadHomeWorkSpace = function(){
         $scope.setShowHomeWorkSpace(true);
       }
    
    $scope.loadHomeWorkSpace();

    $scope.uploadImage = function(){

      if (imageFileService.length>0){
            var image = {};
            ConvertService.uploadImage(imageFileService[0],image)
             .then(
                    function( image ) {
                        if(image!=undefined){
                             var file = new Blob([image], { type: 'application/jpg' });
                             saveAs(file, 'filename.jpg');
                        }
                    });
            }
    }
}]);
