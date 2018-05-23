'use strict';
var BOOKAUTHOR_URI = "BookAuthor"
var BOOK_URI = "Book"
var AUTHOR_URI = "Author"

services.factory('BookAuthorService', function ($http, $q ) {
    // Return public API.
    return({
        createBookAuthor:createBookAuthor,
        updateBookAuthor:updateBookAuthor,
        getAllBookAuthors:getAllBookAuthors,
        getAllBookAuthorsByBookId:getAllBookAuthorsByBookId,
        getAllBookAuthorsByAuthorId:getAllBookAuthorsByAuthorId,
        getBookAuthorById: getBookAuthorById
    });

    function createBookAuthor( bookAuthor ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BOOKAUTHOR_URI,
            data:bookAuthor
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBookAuthor( bookAuthor ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BOOKAUTHOR_URI,
            data:bookAuthor
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBookAuthorById(bookAuthorId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKAUTHOR_URI+ "/" +bookAuthorId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookAuthors(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BOOKAUTHOR_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookAuthorsByBookId(bookId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKAUTHOR_URI+ "/" +BOOK_URI+ "/" +bookId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookAuthorsByAuthorId(authorId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKAUTHOR_URI+ "/" +AUTHOR_URI+ "/" +authorId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});