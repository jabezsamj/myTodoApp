'use strict';
var BOOKCATEGORY_URI = "BookCategory"
var FIRM_URI = "Firm"

services.factory('BookCategoryService', function ($http, $q ) {
    // Return public API.
    return({
        createBookCategory:createBookCategory,
        updateBookCategory:updateBookCategory,
        getAllBookCategorys:getAllBookCategorys,
        getAllBookCategorysByFirmId:getAllBookCategorysByFirmId,
        getBookCategoryById: getBookCategoryById
    });

    function createBookCategory( bookCategory ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BOOKCATEGORY_URI,
            data:bookCategory
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBookCategory( bookCategory ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BOOKCATEGORY_URI,
            data:bookCategory
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBookCategoryById(bookCategoryId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKCATEGORY_URI+ "/" +bookCategoryId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookCategorys(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BOOKCATEGORY_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookCategorysByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKCATEGORY_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});