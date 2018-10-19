myApp.controller('HomePageCtrl', ['$scope', '$location', '$http','$routeParams', '$cookies', '$sce', 'ConvertService',
   function($scope, $location, $http, $routeParams, $cookies, $sce, ConvertService){


    //Person
    $scope.image = {};
    $scope.images = {};  

    //Workspace Items
      
    $scope.showHomeWorkSpace = false;


    $scope.setShowHomeWorkSpace = function(status){
           $scope.showHomeWorkSpace = status;
        }

    $scope.loadHomeWorkSpace = function(){
         $scope.setShowHomeWorkSpace(true);
       }
    
    $scope.loadHomeWorkSpace();


    

    $scope.uploadImage = function(image){
        ConvertService.uploadImage(image)
          .then(
              function( image ) {
                  if(image!=undefined){
                      alert("Image Updated!");
                  }else{
                  }
              }
          );
    }



}]);
