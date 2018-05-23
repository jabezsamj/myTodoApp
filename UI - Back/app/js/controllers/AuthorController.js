'use strict';
/* Controllers */

myApp.controller('AuthorCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','AuthorService', 'imageFileService','ImageService', 'PersonService', 
    function($scope, $location, $http, $routeParams, $sce, AuthorService, imageFileService, ImageService , PersonService){

    $scope.persons = {};
    $scope.person = {};

    $scope.buttonTextAuthor = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLAuthor = BASE_API + "Image/DefaultImageByAuthor/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageAuthor = 1;
    $scope.pageSizeAuthor = 6;

    $scope.sortKeyAuthor = "";
    $scope.authorReverse = false; 

    $scope.sortAuthor = function(columnName,reverse){
        $scope.sortKeyAuthor = columnName;
        $scope.authorReverse = !$scope.authorReverse; 
    }


    $scope.getAllPersons= function(){
        PersonService.getAllPersons()
            .then(
                function( persons ) {
                    if(persons!=undefined){
                        $scope.persons = persons;    
                    }
                }
            );
    }
       
    $scope.setPerson= function(id){
        PersonService.getPersonById(id)
            .then(
                function(person){
                    if(person!=undefined){
                        $scope.person=person;
                        $scope.param2=person.id;
                    }
                }
        );
    } 

    $scope.getAllPersons();


    $scope.loadAuthorForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextAuthor = "Update";
        }    
        else{
            $scope.buttonTextAuthor = "Add";
        }       
    }


    $scope.saveAuthor = function(author){
        if ($scope.buttonTextAuthor=="Add")
            AuthorService.createAuthor(author)
                .then(
                    function( author ) {
                        if(author!=undefined){
                            //$.bootstrapGrowl("Author Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Author Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setAuthor(image.id,author.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Author!");
                                                               $scope.hideAuthorEditForm(author.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideAuthorEditForm(author.id);


                                
                        }else{
                        }
                    }
                );
        else{
            AuthorService.updateAuthor(author)
                .then(
                    function( author ) {
                        if(author!=undefined){
                            //$.bootstrapGrowl("Author Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Author Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setAuthor(image.id,author.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Author!");
                                                               $scope.hideAuthorEditForm(author.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideAuthorEditForm(author.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);