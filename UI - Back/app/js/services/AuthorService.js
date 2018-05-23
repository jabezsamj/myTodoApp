'use strict';
var AUTHOR_URI = "Author"
var AUTHOR_URI = "Author"

services.factory('AuthorService', function ($http, $q ) {
    // Return public API.
    return({
        createAuthor:createAuthor,
        updateAuthor:updateAuthor,
        getAllAuthors:getAllAuthors,
        getAuthorById: getAuthorById
    });

    function createAuthor( author ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + AUTHOR_URI,
            data:author
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateAuthor( author ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + AUTHOR_URI,
            data:author
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAuthorById(authorId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + AUTHOR_URI+ "/" +authorId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllAuthors(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  AUTHOR_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }


  
});