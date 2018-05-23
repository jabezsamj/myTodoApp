'use strict';
/* Controllers */

myApp.controller('IdentityTypeCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','IdentityTypeService', 'imageFileService','ImageService', 
    function($scope, $location, $http, $routeParams, $sce, IdentityTypeService, imageFileService, ImageService ){


    $scope.buttonTextIdentityType = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLIdentityType = BASE_API + "Image/DefaultImageByIdentityType/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageIdentityType = 1;
    $scope.pageSizeIdentityType = 6;

    $scope.sortKeyIdentityType = "";
    $scope.identityTypeReverse = false; 

    $scope.sortIdentityType = function(columnName,reverse){
        $scope.sortKeyIdentityType = columnName;
        $scope.identityTypeReverse = !$scope.identityTypeReverse; 
    }



    $scope.loadIdentityTypeForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextIdentityType = "Update";
        }    
        else{
            $scope.buttonTextIdentityType = "Add";
        }       
    }


    $scope.saveIdentityType = function(identityType){
        if ($scope.buttonTextIdentityType=="Add")
            IdentityTypeService.createIdentityType(identityType)
                .then(
                    function( identityType ) {
                        if(identityType!=undefined){
                            //$.bootstrapGrowl("IdentityType Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("IdentityType Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setIdentityType(image.id,identityType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with IdentityType!");
                                                               $scope.hideIdentityTypeEditForm(identityType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideIdentityTypeEditForm(identityType.id);


                                
                        }else{
                        }
                    }
                );
        else{
            IdentityTypeService.updateIdentityType(identityType)
                .then(
                    function( identityType ) {
                        if(identityType!=undefined){
                            //$.bootstrapGrowl("IdentityType Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("IdentityType Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setIdentityType(image.id,identityType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with IdentityType!");
                                                               $scope.hideIdentityTypeEditForm(identityType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideIdentityTypeEditForm(identityType.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);