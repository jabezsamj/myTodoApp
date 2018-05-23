'use strict';
/* Controllers */

myApp.controller('BranchCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BranchService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, BranchService, imageFileService, ImageService , FirmService){

    $scope.firms = {};
    $scope.firm = {};

    $scope.buttonTextBranch = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLBranch = BASE_API + "Image/DefaultImageByBranch/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBranch = 1;
    $scope.pageSizeBranch = 6;

    $scope.sortKeyBranch = "";
    $scope.branchReverse = false; 

    $scope.sortBranch = function(columnName,reverse){
        $scope.sortKeyBranch = columnName;
        $scope.branchReverse = !$scope.branchReverse; 
    }


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
       
    $scope.setFirm= function(id){
        FirmService.getFirmById(id)
            .then(
                function(firm){
                    if(firm!=undefined){
                        $scope.firm=firm;
                        $scope.param2=firm.id;
                    }
                }
        );
    } 

    $scope.getAllFirms();


    $scope.loadBranchForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBranch = "Update";
        }    
        else{
            $scope.buttonTextBranch = "Add";
        }       
    }


    $scope.saveBranch = function(branch){
        if ($scope.buttonTextBranch=="Add")
            BranchService.createBranch(branch)
                .then(
                    function( branch ) {
                        if(branch!=undefined){
                            //$.bootstrapGrowl("Branch Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Branch Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBranch(image.id,branch.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Branch!");
                                                               $scope.hideBranchEditForm(branch.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBranchEditForm(branch.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BranchService.updateBranch(branch)
                .then(
                    function( branch ) {
                        if(branch!=undefined){
                            //$.bootstrapGrowl("Branch Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Branch Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBranch(image.id,branch.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Branch!");
                                                               $scope.hideBranchEditForm(branch.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBranchEditForm(branch.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);