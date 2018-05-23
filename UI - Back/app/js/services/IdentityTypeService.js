'use strict';
var IDENTITYTYPE_URI = "IdentityType"

services.factory('IdentityTypeService', function ($http, $q ) {
    // Return public API.
    return({
        createIdentityType:createIdentityType,
        updateIdentityType:updateIdentityType,
        getAllIdentityTypes:getAllIdentityTypes,
        getIdentityTypeById: getIdentityTypeById
    });

    function createIdentityType( identityType ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + IDENTITYTYPE_URI,
            data:identityType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateIdentityType( identityType ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + IDENTITYTYPE_URI,
            data:identityType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getIdentityTypeById(identityTypeId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITYTYPE_URI+ "/" +identityTypeId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentityTypes(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  IDENTITYTYPE_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});