'use strict';
var STATUS_URI = "Status"

services.factory('StatusService', function ($http, $q ) {
    // Return public API.
    return({
        getAllStatuss:getAllStatuss,
        getStatusById: getStatusById
    });


    function getStatusById(StatusId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + STATUS_URI+ "/" +StatusId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllStatuss(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  STATUS_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

  
});