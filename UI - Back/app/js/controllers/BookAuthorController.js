'use strict';
/* Controllers */

myApp.controller('BookAuthorCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','BookAuthorService', 'imageFileService','ImageService', 'BookService', 'AuthorService', 
    function($scope, $location, $http, $routeParams, $sce, BookAuthorService, imageFileService, ImageService , BookService, AuthorService){

    $scope.books = {};
    $scope.book = {};
    $scope.authors = {};
    $scope.author = {};

    $scope.buttonTextBookAuthor = "";

    $scope.param1 = "";
    $scope.param2 = "";


    $scope.imgURLBookAuthor = BASE_API + "Image/DefaultImageByBookAuthor/";
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageBookAuthor = 1;
    $scope.pageSizeBookAuthor = 6;

    $scope.sortKeyBookAuthor = "";
    $scope.bookAuthorReverse = false; 

    $scope.sortBookAuthor = function(columnName,reverse){
        $scope.sortKeyBookAuthor = columnName;
        $scope.bookAuthorReverse = !$scope.bookAuthorReverse; 
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

    $scope.getAllAuthors= function(){
        AuthorService.getAllAuthors()
            .then(
                function( authors ) {
                    if(authors!=undefined){
                        $scope.authors = authors;    
                    }
                }
            );
    }
       
    $scope.setAuthor= function(id){
        AuthorService.getAuthorById(id)
            .then(
                function(author){
                    if(author!=undefined){
                        $scope.author=author;
                        $scope.param2=author.id;
                    }
                }
        );
    } 

    $scope.getAllAuthors();


    $scope.loadBookAuthorForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextBookAuthor = "Update";
        }    
        else{
            $scope.buttonTextBookAuthor = "Add";
        }       
    }


    $scope.saveBookAuthor = function(bookAuthor){
        if ($scope.buttonTextBookAuthor=="Add")
            BookAuthorService.createBookAuthor(bookAuthor)
                .then(
                    function( bookAuthor ) {
                        if(bookAuthor!=undefined){
                            //$.bootstrapGrowl("BookAuthor Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookAuthor Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookAuthor(image.id,bookAuthor.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookAuthor!");
                                                               $scope.hideBookAuthorEditForm(bookAuthor.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookAuthorEditForm(bookAuthor.id);


                                
                        }else{
                        }
                    }
                );
        else{
            BookAuthorService.updateBookAuthor(bookAuthor)
                .then(
                    function( bookAuthor ) {
                        if(bookAuthor!=undefined){
                            //$.bootstrapGrowl("BookAuthor Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("BookAuthor Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setBookAuthor(image.id,bookAuthor.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with BookAuthor!");
                                                               $scope.hideBookAuthorEditForm(bookAuthor.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideBookAuthorEditForm(bookAuthor.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);