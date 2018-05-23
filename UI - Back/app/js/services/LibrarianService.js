'use strict';
var LIBRARIAN_URI = "Librarian"
var LIBRARIAN_URI = "Librarian"

services.factory('LibrarianService', function ($http, $q ) {
    // Return public API.
    return({
        createLibrarian:createLibrarian,
        updateLibrarian:updateLibrarian,
        getAllLibrarians:getAllLibrarians,
        getAllLibrariansByLibrarianId:getAllLibrariansByLibrarianId,
        getLibrarianById: getLibrarianById
    });

    function createLibrarian( librarian ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + LIBRARIAN_URI,
            data:librarian
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateLibrarian( librarian ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + LIBRARIAN_URI,
            data:librarian
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getLibrarianById(librarianId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LIBRARIAN_URI+ "/" +librarianId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLibrarians(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  LIBRARIAN_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLibrariansByLibrarianId(librarianId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LIBRARIAN_URI+ "/" +LIBRARIAN_URI+ "/" +librarianId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});