'use strict';
/* Controllers */

myApp.controller('IdentityCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','IdentityService', 'imageFileService','ImageService', 'LibrarianService', 'LawyerService', 'IdentityTypeService', 'AuthorService', 
    function($scope, $location, $http, $routeParams, $sce, IdentityService, imageFileService, ImageService , LibrarianService, LawyerService, IdentityTypeService, AuthorService){

    $scope.librarians = {};
    $scope.librarian = {};
    $scope.lawyers = {};
    $scope.lawyer = {};
    $scope.identityTypes = {};
    $scope.identityType = {};
    $scope.authors = {};
    $scope.author = {};

    $scope.buttonTextIdentity = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLIdentity = BASE_API + "Image/DefaultImageByIdentity/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageIdentity = 1;
    $scope.pageSizeIdentity = 6;

    $scope.sortKeyIdentity = "";
    $scope.identityReverse = false; 

    $scope.sortIdentity = function(columnName,reverse){
        $scope.sortKeyIdentity = columnName;
        $scope.identityReverse = !$scope.identityReverse; 
    }


    $scope.getAllLibrarians= function(){
        LibrarianService.getAllLibrarians()
            .then(
                function( librarians ) {
                    if(librarians!=undefined){
                        $scope.librarians = librarians;    
                    }
                }
            );
    }
       
    $scope.setLibrarian= function(id){
        LibrarianService.getLibrarianById(id)
            .then(
                function(librarian){
                    if(librarian!=undefined){
                        $scope.librarian=librarian;
                        $scope.param2=librarian.id;
                    }
                }
        );
    } 

    $scope.getAllLibrarians();

    $scope.getAllLawyers= function(){
        LawyerService.getAllLawyers()
            .then(
                function( lawyers ) {
                    if(lawyers!=undefined){
                        $scope.lawyers = lawyers;    
                    }
                }
            );
    }
       
    $scope.setLawyer= function(id){
        LawyerService.getLawyerById(id)
            .then(
                function(lawyer){
                    if(lawyer!=undefined){
                        $scope.lawyer=lawyer;
                        $scope.param2=lawyer.id;
                    }
                }
        );
    } 

    $scope.getAllLawyers();

    $scope.getAllIdentityTypes= function(){
        IdentityTypeService.getAllIdentityTypes()
            .then(
                function( identityTypes ) {
                    if(identityTypes!=undefined){
                        $scope.identityTypes = identityTypes;    
                    }
                }
            );
    }
       
    $scope.setIdentityType= function(id){
        IdentityTypeService.getIdentityTypeById(id)
            .then(
                function(identityType){
                    if(identityType!=undefined){
                        $scope.identityType=identityType;
                        $scope.param2=identityType.id;
                    }
                }
        );
    } 

    $scope.getAllIdentityTypes();

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


    $scope.loadIdentityForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextIdentity = "Update";
        }    
        else{
            $scope.buttonTextIdentity = "Add";
        }       
    }


    $scope.saveIdentity = function(identity){
        if ($scope.buttonTextIdentity=="Add")
            IdentityService.createIdentity(identity)
                .then(
                    function( identity ) {
                        if(identity!=undefined){
                            //$.bootstrapGrowl("Identity Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Identity Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setIdentity(image.id,identity.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Identity!");
                                                               $scope.hideIdentityEditForm(identity.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideIdentityEditForm(identity.id);


                                
                        }else{
                        }
                    }
                );
        else{
            IdentityService.updateIdentity(identity)
                .then(
                    function( identity ) {
                        if(identity!=undefined){
                            //$.bootstrapGrowl("Identity Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Identity Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setIdentity(image.id,identity.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Identity!");
                                                               $scope.hideIdentityEditForm(identity.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideIdentityEditForm(identity.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);