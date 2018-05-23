'use strict';
/* Controllers */

myApp.controller('ImageCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','ImageService', 'IdentityService', 'TruckService', 'imageFileService','DriverService',
    function($scope, $location, $http, $routeParams, $sce, ImageService , IdentityService, TruckService ,imageFileService,DriverService){



    $scope.imageURL = BASE_API+"Image/ImageById/";

    $scope.buttonTextImage = "";

    $scope.setButtonTextImage = function(buttonTextImage){
        $scope.buttonTextImage = buttonTextImage;
    }

    $scope.param1 = "";
    $scope.param2 = "";
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageImage = 1;
    $scope.pageSizeImage = 6;

    $scope.sortKeyImage = "";
    $scope.imageReverse = false; 

    $scope.sortImage = function(columnName,reverse){
        $scope.sortKeyImage = columnName;
        $scope.imageReverse = !$scope.imageReverse; 
    }


    


    $scope.loadImageForm = function(isEdit){
        console.log("loading form");
        if (isEdit==1){
            console.log("in Update");
            $scope.setButtonTextImage("Update");
        }    
        else{
            console.log("in Add");
            $scope.setButtonTextImage("Add");
        }       
    }

    $scope.saveImage = function(image){
        console.log("in Save");
        console.log("buttp" + $scope.buttonTextImage);
               if(image.defaultImage==undefined) image.defaultImage = false 
               
               var tempDefaultImage = image.defaultImage; //store false in the first store
               image.defaultImage = false;

               if (imageFileService.length>0){
                console.log("Got File");
                ImageService.uploadFile(imageFileService[0],image)
                    .then(
                        function( image ) {
                            if(image!=undefined){
                                alert("Image Added!");
                                console.log($scope.currentTrip);

                                 


                                 

                            }
                        }
                    );
                }else{
                    alert("Pl include file")
                }
            
    }


    

}]);