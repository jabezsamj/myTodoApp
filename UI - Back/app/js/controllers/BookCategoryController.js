'use strict';
/* Controllers */

myApp.controller('BookCategoryCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BookCategoryService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, BookCategoryService, imageFileService, ImageService , FirmService){

    $scope.firms = {};
    $scope.firm = {};

    $scope.buttonTextBookCategory = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLBookCategory = BASE_API + "Image/DefaultImageByBookCategory/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBookCategory = 1;
    $scope.pageSizeBookCategory = 6;

    $scope.sortKeyBookCategory = "";
    $scope.bookCategoryReverse = false; 

    $scope.sortBookCategory = function(columnName,reverse){
        $scope.sortKeyBookCategory = columnName;
        $scope.bookCategoryReverse = !$scope.bookCategoryReverse; 
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


    $scope.loadBookCategoryForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBookCategory = "Update";
        }    
        else{
            $scope.buttonTextBookCategory = "Add";
        }       
    }


    $scope.saveBookCategory = function(bookCategory){
        if ($scope.buttonTextBookCategory=="Add")
            BookCategoryService.createBookCategory(bookCategory)
                .then(
                    function( bookCategory ) {
                        if(bookCategory!=undefined){
                            //$.bootstrapGrowl("BookCategory Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookCategory Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookCategory(image.id,bookCategory.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookCategory!");
                                                               $scope.hideBookCategoryEditForm(bookCategory.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookCategoryEditForm(bookCategory.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BookCategoryService.updateBookCategory(bookCategory)
                .then(
                    function( bookCategory ) {
                        if(bookCategory!=undefined){
                            //$.bootstrapGrowl("BookCategory Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookCategory Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookCategory(image.id,bookCategory.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookCategory!");
                                                               $scope.hideBookCategoryEditForm(bookCategory.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookCategoryEditForm(bookCategory.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);