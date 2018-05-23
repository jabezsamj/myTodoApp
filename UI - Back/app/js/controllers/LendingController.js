'use strict';
/* Controllers */

myApp.controller('LendingCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','LendingService', 'imageFileService','ImageService', 'BookService', 'IdentityService', 
    function($scope, $location, $http, $routeParams, $sce, LendingService, imageFileService, ImageService , BookService, IdentityService){



    $("#logout").show();

    $scope.books = {};
    $scope.book = {};
    $scope.identitys = {};
    $scope.identity = {};


    $scope.buttonTextLending = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLLending = BASE_API + "Image/DefaultImageByLending/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageLending = 1;
    $scope.pageSizeLending = 6;

    $scope.sortKeyLending = "";
    $scope.lendingReverse = false; 

    $scope.sortLending = function(columnName,reverse){
        $scope.sortKeyLending = columnName;
        $scope.lendingReverse = !$scope.lendingReverse; 
    }


    $scope.getAllBooks= function(){
        BookService.getAllBooks()
            .then(
                function( books ) {
                    if(books!=undefined){
                        $scope.books = books;    
                    }
                }
            );
    }
       
    $scope.setBook= function(id){
        BookService.getBookById(id)
            .then(
                function(book){
                    if(book!=undefined){
                        $scope.book=book;
                        $scope.param2=book.id;
                    }
                }
        );
    } 

    $scope.getAllBooks();

    $scope.getAllIdentitys= function(){
        IdentityService.getAllIdentitys()
            .then(
                function( identitys ) {
                    if(identitys!=undefined){
                        $scope.identitys = identitys;    
                    }
                }
            );
    }
       
    $scope.setIdentity= function(id){
        IdentityService.getIdentityById(id)
            .then(
                function(identity){
                    if(identity!=undefined){
                        $scope.identity=identity;
                        $scope.param2=identity.id;
                    }
                }
        );
    } 

    $scope.getAllIdentitys();


    $scope.loadLendingForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextLending = "Update";
        }    
        else{
            $scope.buttonTextLending = "Add";
        }       
    }


    $scope.saveLending = function(lending){
        if ($scope.buttonTextLending=="Add")
            LendingService.createLending(lending)
                .then(
                    function( lending ) {
                        if(lending!=undefined){
                            //$.bootstrapGrowl("Lending Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Lending Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLending(image.id,lending.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Lending!");
                                                               $scope.hideLendingEditForm(lending.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLendingEditForm(lending.id);


                                
                        }else{
                        }
                    }
                );
        else{
            LendingService.updateLending(lending)
                .then(
                    function( lending ) {
                        if(lending!=undefined){
                            //$.bootstrapGrowl("Lending Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Lending Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLending(image.id,lending.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Lending!");
                                                               $scope.hideLendingEditForm(lending.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLendingEditForm(lending.id);


                                
                        }else{
                        }
                    }
                );
            }
    }

$scope.createDateObject = function()
{


var dateObject = new Date();
return dateObject;
}

}]);