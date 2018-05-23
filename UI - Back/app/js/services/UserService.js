'use strict';
var USER_URI1 = "DunamisUser"
var PERSON_URI = "Person"

services.factory('UserService', function ($http, $q, $httpParamSerializer) {
    // Return public API.
    return({
        createUser:createUser,
        updateUser:updateUser,
        getAllUsers:getAllUsers,
        getAllUsersByPersonId:getAllUsersByPersonId,
        getUserById:getUserById,
        getPerson:getPerson,
        logout:logout
    });

    function updateUser( user) {
        
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + USER_URI1,
            data:user
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function createUser( user ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + USER_URI1,
            data:user
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getUserById(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + USER_URI1+ "/" +userId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllUsers(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  USER_URI1 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllUsersByPersonId(personId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + USER_URI1+ "/" +PERSON_URI+ "/" +personId 
        });
        return( request.then( handleSuccess, handleError ) );
    }


    function getPerson(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + USER_URI1+ "/GetPerson"  
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function logout(token){
        var request = $http({
            method: "POST",
            crossDomain:true,
            url: BASE_API + "tokens" + "/revoke" + "/" +token
        });
        
        return( request.then( handleSuccess, handleError ) );
    }
  
});