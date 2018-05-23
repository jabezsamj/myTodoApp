'use strict';
var PERSON_URI = "Person"

services.factory('PersonService', function ($http, $q ) {
    // Return public API.
    return({
        createPerson:createPerson,
        updatePerson:updatePerson,
        getAllPersons:getAllPersons,
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
  
});