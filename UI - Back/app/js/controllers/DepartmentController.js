'use strict';
/* Controllers */

myApp.controller('DepartmentCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','DepartmentService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, DepartmentService, imageFileService, ImageService , FirmService){

    $scope.firms = {};
    $scope.firm = {};

    $scope.buttonTextDepartment = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLDepartment = BASE_API + "Image/DefaultImageByDepartment/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageDepartment = 1;
    $scope.pageSizeDepartment = 6;

    $scope.sortKeyDepartment = "";
    $scope.departmentReverse = false; 

    $scope.sortDepartment = function(columnName,reverse){
        $scope.sortKeyDepartment = columnName;
        $scope.departmentReverse = !$scope.departmentReverse; 
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


    $scope.loadDepartmentForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextDepartment = "Update";
        }    
        else{
            $scope.buttonTextDepartment = "Add";
        }       
    }


    $scope.saveDepartment = function(department){
        if ($scope.buttonTextDepartment=="Add")
            DepartmentService.createDepartment(department)
                .then(
                    function( department ) {
                        if(department!=undefined){
                            //$.bootstrapGrowl("Department Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Department Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setDepartment(image.id,department.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Department!");
                                                               $scope.hideDepartmentEditForm(department.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideDepartmentEditForm(department.id);


                                
                        }else{
                        }
                    }
                );
        else{
            DepartmentService.updateDepartment(department)
                .then(
                    function( department ) {
                        if(department!=undefined){
                            //$.bootstrapGrowl("Department Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Department Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setDepartment(image.id,department.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Department!");
                                                               $scope.hideDepartmentEditForm(department.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideDepartmentEditForm(department.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);