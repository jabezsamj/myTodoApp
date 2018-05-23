'use strict';
/* Controllers */

myApp.controller('LawyerCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','LawyerService', 'imageFileService','ImageService', 'PersonService', 'FirmService', 'BranchService', 'MembershipTypeService',
    function($scope, $location, $http, $routeParams, $sce, LawyerService, imageFileService, ImageService , PersonService, FirmService, BranchService, MembershipTypeService){
   


    $scope.persons = {};
    $scope.person = {};

    $scope.membershipTypes = {};
    $scope.membershipType = {};


    $scope.buttonTextLawyer = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLLawyer = BASE_API + "Image/DefaultImageByLawyer/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageLawyer = 1;
    $scope.pageSizeLawyer = 6;

    $scope.sortKeyLawyer = "";
    $scope.lawyerReverse = false; 

    $scope.sortLawyer = function(columnName,reverse){
        $scope.sortKeyLawyer = columnName;
        $scope.lawyerReverse = !$scope.lawyerReverse; 
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

    $scope.getAllBranchs= function(){
        BranchService.getAllBranchs()
            .then(
                function( branchs ) {
                    if(branchs!=undefined){
                        $scope.branchs = branchs;    
                    }
                }
            );
    }
       
    $scope.setBranch= function(id){
        BranchService.getBranchById(id)
            .then(
                function(branch){
                    if(branch!=undefined){
                        $scope.branch=branch;
                        $scope.param2=branch.id;
                    }
                }
        );
    } 

    $scope.getAllBranchs();

    $scope.getAllmembershipTypes= function(){
        MembershipTypeService.getAllMembershipTypes()
            .then(
                function( membershipTypes ) {
                    if(membershipTypes!=undefined){
                        $scope.membershipTypes = membershipTypes;    
                    }
                }
            );
    }
       
    $scope.setMembershipType= function(id){
        MembershipTypeService.getMembershipTypeById(id)
            .then(
                function(membershipType){
                    if(membershipType!=undefined){
                        $scope.membershipType=membershipType;
                        $scope.param2=membershipType.id;
                    }
                }
        );
    } 

    $scope.getAllmembershipTypes();


    $scope.loadLawyerForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextLawyer = "Update";
        }    
        else{
            $scope.buttonTextLawyer = "Add";
        }       
    }


    $scope.saveLawyer = function(lawyer){
     
        if ($scope.buttonTextLawyer=="Add")
            LawyerService.createLawyer(lawyer)
                .then(
                    function( lawyer ) {
                        if(lawyer!=undefined){
                            //$.bootstrapGrowl("Lawyer Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Lawyer Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLawyer(image.id,lawyer.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Lawyer!");
                                                               $scope.hideLawyerEditForm(lawyer.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLawyerEditForm(lawyer.id);


                                
                        }else{
                        }
                    }
                );
        else{
            LawyerService.updateLawyer(lawyer)
                .then(
                    function( lawyer ) {
                        if(lawyer!=undefined){
                            //$.bootstrapGrowl("Lawyer Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("Lawyer Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setLawyer(image.id,lawyer.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with Lawyer!");
                                                               $scope.hideLawyerEditForm(lawyer.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideLawyerEditForm(lawyer.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);