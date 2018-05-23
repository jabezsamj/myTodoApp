'use strict';
/* Controllers */

myApp.controller('LendingTypeCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','LendingTypeService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, LendingTypeService, imageFileService, ImageService, FirmService ){

    

    $scope.firms = {};
    $scope.firm = {};


    $scope.buttonTextLendingType = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLLendingType = BASE_API + "Image/DefaultImageByLendingType/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageLendingType = 1;
    $scope.pageSizeLendingType = 6;

    $scope.sortKeyLendingType = "";
    $scope.lendingTypeReverse = false; 


    $scope.getAllFirms= function(){
        FirmService.getAllFirms()
            .then(
                function( firms ) {
                    if(firms!=undefined){
                        $scope.firms = firms;    
                    }
                }
            );
    }

    $scope.getAllFirms();

    $scope.sortLendingType = function(columnName,reverse){
        $scope.sortKeyLendingType = columnName;
        $scope.lendingTypeReverse = !$scope.lendingTypeReverse; 
    }



    $scope.loadLendingTypeForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextLendingType = "Update";
        }    
        else{
            $scope.buttonTextLendingType = "Add";
        }       
    }


    $scope.saveLendingType = function(lendingType){
        if ($scope.buttonTextLendingType=="Add")
            LendingTypeService.createLendingType(lendingType)
                .then(
                    function( lendingType ) {
                        if(lendingType!=undefined){
                            //$.bootstrapGrowl("LendingType Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("LendingType Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLendingType(image.id,lendingType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with LendingType!");
                                                               $scope.hideLendingTypeEditForm(lendingType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLendingTypeEditForm(lendingType.id);


                                
                        }else{
                        }
                    }
                );
        else{
            LendingTypeService.updateLendingType(lendingType)
                .then(
                    function( lendingType ) {
                        if(lendingType!=undefined){
                            //$.bootstrapGrowl("LendingType Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("LendingType Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLendingType(image.id,lendingType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with LendingType!");
                                                               $scope.hideLendingTypeEditForm(lendingType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLendingTypeEditForm(lendingType.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);