'use strict';
var USER_URI1 = "DunamisUser"
var PERSON_URI = "Person"
var REGISTRATION = "registration"
var RESET = "reset"

services.factory('UserService', function ($http, $q ) {
    // Return public API.
    return({
        createUser:createUser,
        createNewUser:createNewUser,
        updateUser:updateUser,
        resetPassword:resetPassword,
        updatePassword:updatePassword,
        getAllUsers:getAllUsers,
        getAllUsersByPersonId:getAllUsersByPersonId,
        getUserById: getUserById,
        getPerson:getPerson
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

    function updatePassword(user, oldPassword, newPassword) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + USER_URI1 + '/' + oldPassword + '/' + newPassword,
            data: user
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function resetPassword(resp, emailId)
    {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + RESET + '/' + resp + '/' + emailId
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

    function createNewUser(user) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url: BASE_API + REGISTRATION,
            data: user
        });
        return(request.then( handleSuccess, handleError ) );
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
            url: BASE_API + USER_URI1+ "/" + PERSON_URI + "/" + personId 
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
  
});