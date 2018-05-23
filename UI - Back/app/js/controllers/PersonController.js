'use strict';
/* Controllers */

myApp.controller('PersonCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','PersonService', 'imageFileService','ImageService', 'FirmService', 
    function($scope, $location, $http, $routeParams, $sce, PersonService, imageFileService, ImageService , FirmService){

    $scope.firms = {};
    $scope.firm = {};

    $scope.buttonTextPerson = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLPerson = BASE_API + "Image/DefaultImageByPerson/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPagePerson = 1;
    $scope.pageSizePerson = 6;

    $scope.sortKeyPerson = "";
    $scope.personReverse = false; 

    $scope.sortPerson = function(columnName,reverse){
        $scope.sortKeyPerson = columnName;
        $scope.personReverse = !$scope.personReverse; 
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


    $scope.loadPersonForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextPerson = "Update";
        }    
        else{
            $scope.buttonTextPerson = "Add";
        }       
    }


    $scope.savePerson = function(person){
        if ($scope.buttonTextPerson=="Add")
            PersonService.createPerson(person)
                .then(
                    function( person ) {
                        if(person!=undefined){
                            //$.bootstrapGrowl("Person Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Person Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setPerson(image.id,person.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Person!");
                                                               $scope.hidePersonEditForm(person.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hidePersonEditForm(person.id);


                                
                        }else{
                        }
                    }
                );
        else{
            PersonService.updatePerson(person)
                .then(
                    function( person ) {
                        if(person!=undefined){
                            //$.bootstrapGrowl("Person Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Person Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setPerson(image.id,person.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Person!");
                                                               $scope.hidePersonEditForm(person.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hidePersonEditForm(person.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);