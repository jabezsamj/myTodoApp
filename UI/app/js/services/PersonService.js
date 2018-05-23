'use strict';
var PERSON_URI = "Person"
var FIRM_URI = "Firm"

services.factory('PersonService', function ($http, $q ) {
    // Return public API.
    return({
        createPerson:createPerson,
        updatePerson:updatePerson,
        getAllPersons:getAllPersons,
        getAllPersonsByFirmId:getAllPersonsByFirmId,
        getPersonById: getPersonById
    });

    function createPerson( person ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + PERSON_URI,
            data:person
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updatePerson( person ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + PERSON_URI,
            data:person
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getPersonById(personId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + PERSON_URI+ "/" +personId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllPersons(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  PERSON_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllPersonsByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + PERSON_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});