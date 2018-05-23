'use strict';
var LENDINGTYPE_URI = "LendingType"

services.factory('LendingTypeService', function ($http, $q ) {
    // Return public API.
    return({
        createLendingType:createLendingType,
        updateLendingType:updateLendingType,
        getAllLendingTypes:getAllLendingTypes,
        getLendingTypeById: getLendingTypeById
    });

    function createLendingType( lendingType ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + LENDINGTYPE_URI,
            data:lendingType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateLendingType( lendingType ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + LENDINGTYPE_URI,
            data:lendingType
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getLendingTypeById(lendingTypeId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LENDINGTYPE_URI+ "/" +lendingTypeId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLendingTypes(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  LENDINGTYPE_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});