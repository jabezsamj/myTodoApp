'use strict';
var FIRM_URI = "Firm"

services.factory('FirmService', function ($http, $q ) {
    // Return public API.
    return({
        createFirm:createFirm,
        updateFirm:updateFirm,
        getAllFirms:getAllFirms,
        getFirmById: getFirmById
    });

    function createFirm( firm ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + FIRM_URI,
            data:firm
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateFirm( firm ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + FIRM_URI,
            data:firm
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getFirmById(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + FIRM_URI+ "/" +firmId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllFirms(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  FIRM_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});