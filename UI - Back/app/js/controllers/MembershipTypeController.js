'use strict';
/* Controllers */

myApp.controller('MembershipTypeCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','MembershipTypeService', 'imageFileService','ImageService', 
    function($scope, $location, $http, $routeParams, $sce, MembershipTypeService, imageFileService, ImageService ){


    $scope.buttonTextMembershipType = "";

    $scope.param1 = "";
    $scope.param2 = "";

    $scope.imgURLMembershipType = BASE_API + "Image/DefaultImageByMembershipType/"
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageMembershipType = 1;
    $scope.pageSizeMembershipType = 6;

    $scope.sortKeyMembershipType = "";
    $scope.membershipTypeReverse = false; 

    $scope.sortMembershipType = function(columnName,reverse){
        $scope.sortKeyMembershipType = columnName;
        $scope.membershipTypeReverse = !$scope.membershipTypeReverse; 
    }



    $scope.loadMembershipTypeForm = function(isEdit){
        if (isEdit==1){
            $scope.buttonTextMembershipType = "Update";
        }    
        else{
            $scope.buttonTextMembershipType = "Add";
        }       
    }


    $scope.saveMembershipType = function(membershipType){
        if ($scope.buttonTextMembershipType=="Add")
            MembershipTypeService.createMembershipType(membershipType)
                .then(
                    function( membershipType ) {
                        if(membershipType!=undefined){
                            //$.bootstrapGrowl("MembershipType Added!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("MembershipType Added!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setMembershipType(image.id,membershipType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with MembershipType!");
                                                               $scope.hideMembershipTypeEditForm(membershipType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideMembershipTypeEditForm(membershipType.id);


                                
                        }else{
                        }
                    }
                );
        else{
            MembershipTypeService.updateMembershipType(membershipType)
                .then(
                    function( membershipType ) {
                        if(membershipType!=undefined){
                            //$.bootstrapGrowl("MembershipType Updated!", { type: 'success',allow_dismiss: false,align: 'right', });
                            alert("MembershipType Updated!");
                                                        



                            if (imageFileService.length>0){
                               var image = {};
                               image.defaultImage = true;
                               ImageService.uploadFile(imageFileService[0],image)
                                   .then(
                                       function( image ) {
                                           if(image!=undefined){
                                               alert("Image Added!");
                                                   ImageService.setMembershipType(image.id,membershipType.id,true)
                                                   .then(
                                                       function( image ) {
                                                           if(image!=undefined){
                                                               alert("Image Updated with MembershipType!");
                                                               $scope.hideMembershipTypeEditForm(membershipType.id);
                                                           }
                                                       }
                                                   );
                                           }
                                       }
                                   );
                            }else
                                $scope.hideMembershipTypeEditForm(membershipType.id);


                                
                        }else{
                        }
                    }
                );
            }
    }


}]);