'use strict';
/* Controllers */

myApp.controller('BookSubCategoryCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BookSubCategoryService', 'imageFileService','ImageService', 'BookCategoryService', 
    function($scope, $location, $http, $routeParams, $sce, BookSubCategoryService, imageFileService, ImageService , BookCategoryService){

    $scope.bookCategorys = {};
    $scope.bookCategory = {};

    $scope.buttonTextBookSubCategory = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLBookSubCategory = BASE_API + "Image/DefaultImageByBookSubCategory/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBookSubCategory = 1;
    $scope.pageSizeBookSubCategory = 6;

    $scope.sortKeyBookSubCategory = "";
    $scope.bookSubCategoryReverse = false; 

    $scope.sortBookSubCategory = function(columnName,reverse){
        $scope.sortKeyBookSubCategory = columnName;
        $scope.bookSubCategoryReverse = !$scope.bookSubCategoryReverse; 
    }


    $scope.getAllBookCategorys= function(){
        BookCategoryService.getAllBookCategorys()
            .then(
                function( bookCategorys ) {
                    if(bookCategorys!=undefined){
                        $scope.bookCategorys = bookCategorys;    
                    }
                }
            );
    }
       
    $scope.setBookCategory= function(id){
        BookCategoryService.getBookCategoryById(id)
            .then(
                function(bookCategory){
                    if(bookCategory!=undefined){
                        $scope.bookCategory=bookCategory;
                        $scope.param2=bookCategory.id;
                    }
                }
        );
    } 

    $scope.getAllBookCategorys();


    $scope.loadBookSubCategoryForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBookSubCategory = "Update";
        }    
        else{
            $scope.buttonTextBookSubCategory = "Add";
        }       
    }


    $scope.saveBookSubCategory = function(bookSubCategory){
        if ($scope.buttonTextBookSubCategory=="Add")
            BookSubCategoryService.createBookSubCategory(bookSubCategory)
                .then(
                    function( bookSubCategory ) {
                        if(bookSubCategory!=undefined){
                            //$.bootstrapGrowl("BookSubCategory Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookSubCategory Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookSubCategory(image.id,bookSubCategory.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookSubCategory!");
                                                               $scope.hideBookSubCategoryEditForm(bookSubCategory.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookSubCategoryEditForm(bookSubCategory.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BookSubCategoryService.updateBookSubCategory(bookSubCategory)
                .then(
                    function( bookSubCategory ) {
                        if(bookSubCategory!=undefined){
                            //$.bootstrapGrowl("BookSubCategory Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookSubCategory Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookSubCategory(image.id,bookSubCategory.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookSubCategory!");
                                                               $scope.hideBookSubCategoryEditForm(bookSubCategory.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookSubCategoryEditForm(bookSubCategory.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);