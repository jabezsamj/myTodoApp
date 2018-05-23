'use strict';
/* Controllers */

myApp.controller('LibrarianCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','LibrarianService', 'imageFileService','ImageService', 'PersonService', 
    function($scope, $location, $http, $routeParams, $sce, LibrarianService, imageFileService, ImageService , PersonService){

    $scope.persons = {};
    $scope.person = {};

    $scope.buttonTextLibrarian = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLLibrarian = BASE_API + "Image/DefaultImageByLibrarian/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageLibrarian = 1;
    $scope.pageSizeLibrarian = 6;

    $scope.sortKeyLibrarian = "";
    $scope.librarianReverse = false; 

    $scope.sortLibrarian = function(columnName,reverse){
        $scope.sortKeyLibrarian = columnName;
        $scope.librarianReverse = !$scope.librarianReverse; 
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


    $scope.loadLibrarianForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextLibrarian = "Update";
        }    
        else{
            $scope.buttonTextLibrarian = "Add";
        }       
    }


    $scope.saveLibrarian = function(librarian){
        if ($scope.buttonTextLibrarian=="Add")
            LibrarianService.createLibrarian(librarian)
                .then(
                    function( librarian ) {
                        if(librarian!=undefined){
                            //$.bootstrapGrowl("Librarian Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Librarian Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLibrarian(image.id,librarian.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Librarian!");
                                                               $scope.hideLibrarianEditForm(librarian.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLibrarianEditForm(librarian.id);


                                
                        }else{
                        }
                    }
                );
        else{
            LibrarianService.updateLibrarian(librarian)
                .then(
                    function( librarian ) {
                        if(librarian!=undefined){
                            //$.bootstrapGrowl("Librarian Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Librarian Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLibrarian(image.id,librarian.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Librarian!");
                                                               $scope.hideLibrarianEditForm(librarian.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLibrarianEditForm(librarian.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);