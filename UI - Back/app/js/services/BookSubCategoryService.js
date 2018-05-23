'use strict';
var BOOKSUBCATEGORY_URI = "BookSubCategory"
var BOOKCATEGORY_URI = "BookCategory"

services.factory('BookSubCategoryService', function ($http, $q ) {
    // Return public API.
    return({
        createBookSubCategory:createBookSubCategory,
        updateBookSubCategory:updateBookSubCategory,
        getAllBookSubCategorys:getAllBookSubCategorys,
        getAllBookSubCategorysByBookCategoryId:getAllBookSubCategorysByBookCategoryId,
        getBookSubCategoryById: getBookSubCategoryById
    });

    function createBookSubCategory( bookSubCategory ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BOOKSUBCATEGORY_URI,
            data:bookSubCategory
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBookSubCategory( bookSubCategory ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BOOKSUBCATEGORY_URI,
            data:bookSubCategory
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBookSubCategoryById(bookSubCategoryId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKSUBCATEGORY_URI+ "/" +bookSubCategoryId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookSubCategorys(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BOOKSUBCATEGORY_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookSubCategorysByBookCategoryId(bookCategoryId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKSUBCATEGORY_URI+ "/" +BOOKCATEGORY_URI+ "/" +bookCategoryId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});