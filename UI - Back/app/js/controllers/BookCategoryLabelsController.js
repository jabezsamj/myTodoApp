'use strict';
/* Controllers */

myApp.controller('BookCategoryLabelsCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BookCategoryLabelsService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, BookCategoryLabelsService, imageFileService, ImageService , FirmService){

    $scope.firms = {};
    $scope.firm = {};

    $scope.buttonTextBookCategoryLabels = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLBookCategoryLabels = BASE_API + "Image/DefaultImageByBookCategoryLabels/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBookCategoryLabels = 1;
    $scope.pageSizeBookCategoryLabels = 6;

    $scope.sortKeyBookCategoryLabels = "";
    $scope.bookCategoryLabelsReverse = false; 

    $scope.sortBookCategoryLabels = function(columnName,reverse){
        $scope.sortKeyBookCategoryLabels = columnName;
        $scope.bookCategoryLabelsReverse = !$scope.bookCategoryLabelsReverse; 
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


    $scope.loadBookCategoryLabelsForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBookCategoryLabels = "Update";
        }    
        else{
            $scope.buttonTextBookCategoryLabels = "Add";
        }       
    }


    $scope.saveBookCategoryLabels = function(bookCategoryLabels){
        if ($scope.buttonTextBookCategoryLabels=="Add")
            BookCategoryLabelsService.createBookCategoryLabels(bookCategoryLabels)
                .then(
                    function( bookCategoryLabels ) {
                        if(bookCategoryLabels!=undefined){
                            //$.bootstrapGrowl("BookCategoryLabels Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookCategoryLabels Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookCategoryLabels(image.id,bookCategoryLabels.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookCategoryLabels!");
                                                               $scope.hideBookCategoryLabelsEditForm(bookCategoryLabels.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookCategoryLabelsEditForm(bookCategoryLabels.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BookCategoryLabelsService.updateBookCategoryLabels(bookCategoryLabels)
                .then(
                    function( bookCategoryLabels ) {
                        if(bookCategoryLabels!=undefined){
                            //$.bootstrapGrowl("BookCategoryLabels Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookCategoryLabels Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookCategoryLabels(image.id,bookCategoryLabels.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookCategoryLabels!");
                                                               $scope.hideBookCategoryLabelsEditForm(bookCategoryLabels.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookCategoryLabelsEditForm(bookCategoryLabels.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);