'use strict';
/* Controllers */

myApp.controller('FirmCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','FirmService', 'imageFileService','ImageService', 
    function($scope, $location, $http, $routeParams, $sce, FirmService, imageFileService, ImageService ){


    $scope.buttonTextFirm = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLFirm = BASE_API + "Image/DefaultImageByFirm/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageFirm = 1;
    $scope.pageSizeFirm = 6;

    $scope.sortKeyFirm = "";
    $scope.firmReverse = false; 

    $scope.sortFirm = function(columnName,reverse){
        $scope.sortKeyFirm = columnName;
        $scope.firmReverse = !$scope.firmReverse; 
    }



    $scope.loadFirmForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextFirm = "Update";
        }    
        else{
            $scope.buttonTextFirm = "Add";
        }       
    }


    $scope.saveFirm = function(firm){
        if ($scope.buttonTextFirm=="Add")
            FirmService.createFirm(firm)
                .then(
                    function( firm ) {
                        if(firm!=undefined){
                            //$.bootstrapGrowl("Firm Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Firm Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setFirm(image.id,firm.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Firm!");
                                                               $scope.hideFirmEditForm(firm.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideFirmEditForm(firm.id);


                                
                        }else{
                        }
                    }
                );
        else{
            FirmService.updateFirm(firm)
                .then(
                    function( firm ) {
                        if(firm!=undefined){
                            //$.bootstrapGrowl("Firm Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Firm Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setFirm(image.id,firm.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Firm!");
                                                               $scope.hideFirmEditForm(firm.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideFirmEditForm(firm.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);