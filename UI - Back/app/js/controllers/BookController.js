'use strict';
/* Controllers */

myApp.controller('BookCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BookService', 'imageFileService','ImageService', 'FirmService', 'LendingTypeService', 
    function($scope, $location, $http, $routeParams, $sce, BookService, imageFileService, ImageService , FirmService, LendingTypeService){

    $scope.firms = {};
    $scope.firm = {};
    $scope.lendingTypes = {};
    $scope.lendingType = {};

    $scope.buttonTextBook = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLBook = BASE_API + "Image/DefaultImageByBook/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBook = 1;
    $scope.pageSizeBook = 6;

    $scope.sortKeyBook = "";
    $scope.bookReverse = false; 

    $scope.sortBook = function(columnName,reverse){
        $scope.sortKeyBook = columnName;
        $scope.bookReverse = !$scope.bookReverse; 
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

    $scope.getAllLendingTypes= function(){
        LendingTypeService.getAllLendingTypes()
            .then(
                function( lendingTypes ) {
                    if(lendingTypes!=undefined){
                        $scope.lendingTypes = lendingTypes;    
                    }
                }
            );
    }
       
    $scope.setLendingType= function(id){
        LendingTypeService.getLendingTypeById(id)
            .then(
                function(lendingType){
                    if(lendingType!=undefined){
                        $scope.lendingType=lendingType;
                        $scope.param2=lendingType.id;
                    }
                }
        );
    } 

    $scope.getAllLendingTypes();


    $scope.loadBookForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBook = "Update";
        }    
        else{
            $scope.buttonTextBook = "Add";
        }       
    }


    $scope.saveBook = function(book){
        if ($scope.buttonTextBook=="Add")
            BookService.createBook(book)
                .then(
                    function( book ) {
                        if(book!=undefined){
                            //$.bootstrapGrowl("Book Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Book Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBook(image.id,book.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Book!");
                                                               $scope.hideBookEditForm(book.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookEditForm(book.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BookService.updateBook(book)
                .then(
                    function( book ) {
                        if(book!=undefined){
                            //$.bootstrapGrowl("Book Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Book Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBook(image.id,book.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Book!");
                                                               $scope.hideBookEditForm(book.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookEditForm(book.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);