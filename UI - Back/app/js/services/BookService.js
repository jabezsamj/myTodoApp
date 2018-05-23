'use strict';
var BOOK_URI = "Book"
var FIRM_URI = "Firm"
var LENDINGTYPE_URI = "LendingType"

services.factory('BookService', function ($http, $q ) {
    // Return public API.
    return({
        createBook:createBook,
        updateBook:updateBook,
        getAllBooks:getAllBooks,
        getAllBooksByFirmId:getAllBooksByFirmId,
        getAllBooksByLendingTypeId:getAllBooksByLendingTypeId,
        getBookById: getBookById
    });

    function createBook( book ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BOOK_URI,
            data:book
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBook( book ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BOOK_URI,
            data:book
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBookById(bookId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOK_URI+ "/" +bookId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBooks(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BOOK_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBooksByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOK_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBooksByLendingTypeId(lendingTypeId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOK_URI+ "/" +LENDINGTYPE_URI+ "/" +lendingTypeId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});