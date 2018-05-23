'use strict';
var MEMBERSHIPTYPE_URI = "MembershipType"

services.factory('MembershipTypeService', function ($http, $q ) {
    // Return public API.
    return({
        createMembershipType:createMembershipType,
        updateMembershipType:updateMembershipType,
        getAllMembershipTypes:getAllMembershipTypes,
        getMembershipTypeById: getMembershipTypeById
    });

    function createMembershipType( membershipType ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + MEMBERSHIPTYPE_URI,
            data:membershipType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateMembershipType( membershipType ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + MEMBERSHIPTYPE_URI,
            data:membershipType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getMembershipTypeById(membershipTypeId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + MEMBERSHIPTYPE_URI+ "/" +membershipTypeId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllMembershipTypes(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  MEMBERSHIPTYPE_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});