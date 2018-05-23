'use strict';
var IDENTITY_URI = "Identity"
var LIBRARIAN_URI = "Librarian"
var LAWYER_URI = "Lawyer"
var IDENTITYTYPE_URI = "IdentityType"
var AUTHOR_URI = "Author"

services.factory('IdentityService', function ($http, $q ) {
    // Return public API.
    return({
        createIdentity:createIdentity,
        updateIdentity:updateIdentity,
        getAllIdentitys:getAllIdentitys,
        getAllIdentitysByLibrarianId:getAllIdentitysByLibrarianId,
        getAllIdentitysByLawyerId:getAllIdentitysByLawyerId,
        getAllIdentitysByIdentityTypeId:getAllIdentitysByIdentityTypeId,
        getAllIdentitysByAuthorId:getAllIdentitysByAuthorId,
        getIdentityById: getIdentityById
    });

    function createIdentity( identity ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + IDENTITY_URI,
            data:identity
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateIdentity( identity ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + IDENTITY_URI,
            data:identity
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getIdentityById(identityId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITY_URI+ "/" +identityId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentitys(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  IDENTITY_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentitysByLibrarianId(librarianId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITY_URI+ "/" +LIBRARIAN_URI+ "/" +librarianId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentitysByLawyerId(lawyerId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITY_URI+ "/" +LAWYER_URI+ "/" +lawyerId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentitysByIdentityTypeId(identityTypeId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITY_URI+ "/" +IDENTITYTYPE_URI+ "/" +identityTypeId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllIdentitysByAuthorId(authorId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IDENTITY_URI+ "/" +AUTHOR_URI+ "/" +authorId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});